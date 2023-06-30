import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, Select, MenuItem, Button } from '@mui/material';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  address: yup.string().required('Address is required'),
  country: yup.string().required('Country is required'),
});

const initialValues = {
  name: '',
  address: '',
  country: '',
};

const countries = [
  { value: 'usa', label: 'USA' },
  { value: 'canada', label: 'Canada' },
  { value: 'uk', label: 'UK' },
  { value: 'australia', label: 'Australia' },
];

const App = () => {
  const handleSubmit = (values, { setSubmitting,resetForm }) => {
    console.log(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="App">
      <h1>User Information Form</h1>
     <div style={{ margin: '20px' }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field as={TextField} label="Name" name="name" fullWidth />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field as={TextField} label="Address" name="address" fullWidth multiline rows={4} />
              <ErrorMessage name="address" component="div" />
            </div>
            <div>
              <Field as={Select} label="Country" name="country" fullWidth>
                <MenuItem value="" disabled>
                  Select a country
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.label}
                  </MenuItem>
                ))}
              </Field>
              <ErrorMessage name="country" component="div" />
            </div>
            <Button type="submit" variant="contained"disabled={isSubmitting}>Submit</Button>
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
};

export default App;
