import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, FormGroup, FormControl, FormLabel, Alert } from 'react-bootstrap';


const AddLog = () => {

    const validationSchema = Yup.object().shape({
        night: Yup.string()
            .matches(/^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/i, 'Invalid Day of the Week')
            .required('Night is required'),
        date: Yup.string()
            .matches(
              /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/,
              'Invalid date format. Use mm/dd/yyyy'
            )
            .required('Date is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            'Password must contain at least 8 characters, one letter, and one number'
          )
          .required('Password is required'),
    });
    
    // Define initial form values
    const initialValues = {
    email: '',
    password: '',
    night: '',
    };
    
    // Handle form submission
    const onSubmit = (values:any) => {
    // Your form submission logic here
    console.log(values);
    };

    return (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form  className='mt-3'>
              {/*Night */}
              <FormGroup controlId="night">
                <FormLabel>Night (day of the week)</FormLabel>
                <Field
                  type="text"
                  name="night"
                  as={FormControl}
                  placeholder="Monday"
                />
                <ErrorMessage name="night" render={(msg) => <Alert variant="danger">{msg}</Alert>} />
              </FormGroup>
              {/*Date */}
              <FormGroup controlId="date">
                <FormLabel>Date (mm/dd/yyyy)</FormLabel>
                <Field
                  type="date"
                  name="date"
                  as={FormControl}
                  placeholder="01/01/2023"
                />
                <ErrorMessage name="night" render={(msg) => <Alert variant="danger">{msg}</Alert>} />
              </FormGroup>



              {/* Email field */}
              <FormGroup controlId="email">
                <FormLabel>Email</FormLabel>
                <Field
                  type="email"
                  name="email"
                  as={FormControl}
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" render={(msg) => <Alert variant="danger">{msg}</Alert>} />
              </FormGroup>
    
              {/* Password field */}
              <FormGroup controlId="password">
                <FormLabel>Password</FormLabel>
                <Field
                  type="password"
                  name="password"
                  as={FormControl}
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" render={(msg) => <Alert variant="danger">{msg}</Alert>} />
              </FormGroup>
    
              {/* Submit button */}
              <Button className='mt-3' type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      );
}

export default AddLog;
