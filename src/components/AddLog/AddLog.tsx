import React from 'react';
import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, FormGroup, FormControl, FormLabel, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddLog = () => {

  const validationSchema = Yup.object().shape({
    night: Yup.string()
      .matches(/^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/i, 'Invalid Day of the Week')
      .required('Night is required'),
    date: Yup.string()
      .required('Date is required'),
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      night: '',
      date: '',
      timeWentToBed: '',
      timeTookToFallAsleep: '',
      numTimesWokeUp: '',
      finalAwakening: '',
      gotOutOfBed: '',
      hoursSlept: '',
      hoursAllotted: '',
      sleepQuality: '',
      sleepMeds: '',
      notes: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Your form submission logic here
      console.log(values);
      navigate('/');
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
            <label className='d-block mb-2'>Last night, what time did you go to bed? (lights out)</label>
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

        {/* Time took to fall asleep */}
        <FormGroup className='mt-3' controlId='timeTookToFallAsleep'>
            <label className='d-block mb-2'>About how long did it take you to fall asleep?</label>
            <input
            type="text"
            id='timeTookToFallAsleep'
            name='timeTookToFallAsleep'
            value={formik.values.timeTookToFallAsleep}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="0:25"
            />
            {/* <ErrorMessage name="date" render={(msg) => <Alert variant="danger">{msg}</Alert>} /> */}
        </FormGroup>

        {/* Number of times woke up */}
        <FormGroup className='mt-3' controlId='numTimesWokeUp'>
            <label className='d-block mb-2'>About how long did it take you to fall asleep?</label>
            <input
            type="number"
            id='numTimesWokeUp'
            name='numTimesWokeUp'
            value={formik.values.numTimesWokeUp}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="1"
            />
            {/* <ErrorMessage name="date" render={(msg) => <Alert variant="danger">{msg}</Alert>} /> */}
        </FormGroup>

        {/* Time of final awakening */}
        <FormGroup className='mt-3' controlId='finalAwakening'>
            <label className='d-block mb-2'>What time was your final awakening this morning?</label>
            <input
            type="text"
            id='finalAwakening'
            name='finalAwakening'
            value={formik.values.finalAwakening}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="8:00am"
            />
            {/* <ErrorMessage name="date" render={(msg) => <Alert variant="danger">{msg}</Alert>} /> */}
        </FormGroup>

        {/* Time got out of bed */}
        <FormGroup className='mt-3' controlId='gotOutOfBed'>
            <label className='d-block mb-2'>What time did you get out of bed?</label>
            <input
            type="text"
            id='gotOutOfBed'
            name='gotOutOfBed'
            value={formik.values.gotOutOfBed}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="8:00am"
            />
            {/* <ErrorMessage name="date" render={(msg) => <Alert variant="danger">{msg}</Alert>} /> */}
        </FormGroup>

        {/* How many hours did you sleep */}
        <FormGroup className='mt-3' controlId='hoursSlept'>
            <label className='d-block mb-2'>What time did you get out of bed?</label>
            <input
            type="text"
            id='hoursSlept'
            name='hoursSlept'
            value={formik.values.hoursSlept}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="8:00"
            />
            {/* <ErrorMessage name="date" render={(msg) => <Alert variant="danger">{msg}</Alert>} /> */}
        </FormGroup>

        {/* How many hours did you sleep */}
        <FormGroup className='mt-3' controlId='hoursAllotted'>
            <label className='d-block mb-2'>How many hours did you allot for sleep last night? (lights out to out of bed)</label>
            <input
            type="text"
            id='hoursAllotted'
            name='hoursAllotted'
            value={formik.values.hoursAllotted}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="8:00"
            />
            {/* <ErrorMessage name="date" render={(msg) => <Alert variant="danger">{msg}</Alert>} /> */}
        </FormGroup>
        
        {/* How many hours did you sleep */}
        <FormGroup className='mt-3' controlId='sleepQuality'>
            <label className='d-block mb-2'>Rate the quality of last night's sleep (1-5)</label>
            <input
            type="number"
            id='sleepQuality'
            name='sleepQuality'
            value={formik.values.sleepQuality}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="3"
            />
            {/* <ErrorMessage name="date" render={(msg) => <Alert variant="danger">{msg}</Alert>} /> */}
        </FormGroup>

        {/* How many hours did you sleep */}
        <FormGroup className='mt-3' controlId='sleepMeds'>
            <label className='d-block mb-2'>Sleep medications taken</label>
            <input
            type="text"
            id='sleepMeds'
            name='sleepMeds'
            value={formik.values.sleepMeds}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Melatonin: 1mg"
            />
            {/* <ErrorMessage name="date" render={(msg) => <Alert variant="danger">{msg}</Alert>} /> */}
        </FormGroup>

        {/* How many hours did you sleep */}
        <FormGroup className='mt-3' controlId='notes'>
            <label className='d-block mb-2'>Additional Notes</label>
            <input
            type="text"
            id='notes'
            name='notes'
            value={formik.values.notes}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="notes"
            />
            {/* <ErrorMessage name="date" render={(msg) => <Alert variant="danger">{msg}</Alert>} /> */}
        </FormGroup>

        

        {/* Submit button */}
        <Button className='mt-3 mb-3' type='submit'>
            Submit
        </Button>
    </form>
  );
}

export default AddLog;
