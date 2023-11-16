import React from 'react';
import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, FormGroup, FormControl, FormLabel, Alert } from 'react-bootstrap';

const AddLog = () => {
  const validationSchema = Yup.object().shape({
    night: Yup.string()
      .matches(/^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/i, 'Invalid Day of the Week')
      .required('Night is required'),
    date: Yup.string()
      .required('Date is required'),
  });

  const formik = useFormik({
    initialValues: {
      night: '',
      date: '',
      timeWentToBed: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Your form submission logic here
      console.log(values);
    },
  });

  return (
    <form className='mt-3' autoComplete='false' onSubmit={formik.handleSubmit}>
        {/* Night */}
        <FormGroup className='mt-3' controlId="night">
            <label className='d-block mb-2'>Night (day of the week)</label>
            <input
            type="text"
            id='night'
            name='night'
            value={formik.values.night}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Monday"
            />
            {/* <ErrorMessage name="night" render={(msg) => <Alert variant="danger">{msg}</Alert>} /> */}
        </FormGroup>

        {/* Date */}
        <FormGroup className='mt-3' controlId='date'>
            <label className='d-block mb-2'>Date (mm/dd/yyyy)</label>
            <input
            type="date"
            id='date'
            name='date'
            value={formik.values.date}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="01/01/2023"
            />
            {/* <ErrorMessage name="date" render={(msg) => <Alert variant="danger">{msg}</Alert>} /> */}
        </FormGroup>

        {/* Time went to bed */}
        <FormGroup className='mt-3' controlId='timeWentToBed'>
            <label className='d-block mb-2'>Last night, what time did you go to bed?</label>
            <input
            type="text"
            id='timeWentToBed'
            name='timeWentToBed'
            value={formik.values.timeWentToBed}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="12:01am"
            />
            {/* <ErrorMessage name="date" render={(msg) => <Alert variant="danger">{msg}</Alert>} /> */}
        </FormGroup>

        {/* Submit button */}
        <Button className='mt-3' type='submit'>
            Submit
        </Button>
    </form>
  );
}

export default AddLog;
