import React from 'react';
import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, FormGroup, FormControl, FormLabel, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import formSchema from '../../schemas';
import './AddLog.css';
import axios from 'axios';

const AddLog = () => {

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
    validationSchema: formSchema,
    onSubmit: async (values) => {

      console.log(values);

      const endpointURL = 'https://add-sleep-log-4ydnoxgsaa-uc.a.run.app';

      try {  
        const response = await axios.post(endpointURL, values);
        console.log(response.data.message);
      } catch (error) {
        console.error('Error submitting sleep log:', error);
      }
      navigate('/');
    },
  });

  return (
    <form className='mt-3 ms-5' autoComplete='false' onSubmit={formik.handleSubmit}>
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
            className={formik.errors.night && formik.touched.night ? 'input-error' : ''}
            />
            {formik.errors.night && formik.touched.night && <p className='error'>{formik.errors.night}</p>}
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
            className={formik.errors.date && formik.touched.date ? 'input-error' : ''}
            />
            {formik.errors.date && formik.touched.date && <p className='error'>{formik.errors.date}</p>}
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
            className={formik.errors.timeWentToBed && formik.touched.timeWentToBed ? 'input-error' : ''}
            />
            {formik.errors.timeWentToBed && formik.touched.timeWentToBed && <p className='error'>{formik.errors.timeWentToBed}</p>}
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
            className={formik.errors.timeTookToFallAsleep && formik.touched.timeTookToFallAsleep ? 'input-error' : ''}
            />
            {formik.errors.timeTookToFallAsleep && formik.touched.timeTookToFallAsleep && <p className='error'>{formik.errors.timeTookToFallAsleep}</p>}
        </FormGroup>

        {/* Number of times woke up */}
        <FormGroup className='mt-3' controlId='numTimesWokeUp'>
            <label className='d-block mb-2'>About how many times did you awaken during the night?</label>
            <input
            type="number"
            id='numTimesWokeUp'
            name='numTimesWokeUp'
            value={formik.values.numTimesWokeUp}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="1"
            className={formik.errors.numTimesWokeUp && formik.touched.numTimesWokeUp ? 'input-error' : ''}
            />
            {formik.errors.numTimesWokeUp && formik.touched.numTimesWokeUp && <p className='error'>{formik.errors.numTimesWokeUp}</p>}
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
            className={formik.errors.finalAwakening && formik.touched.finalAwakening ? 'input-error' : ''}
            />
            {formik.errors.finalAwakening && formik.touched.finalAwakening && <p className='error'>{formik.errors.finalAwakening}</p>}
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
            className={formik.errors.gotOutOfBed && formik.touched.gotOutOfBed ? 'input-error' : ''}
            />
            {formik.errors.gotOutOfBed && formik.touched.gotOutOfBed && <p className='error'>{formik.errors.gotOutOfBed}</p>}
        </FormGroup>

        {/* How many hours did you sleep */}
        <FormGroup className='mt-3' controlId='hoursSlept'>
            <label className='d-block mb-2'>How many hours did you sleep last night?</label>
            <input
            type="text"
            id='hoursSlept'
            name='hoursSlept'
            value={formik.values.hoursSlept}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="8:00"
            className={formik.errors.hoursSlept && formik.touched.hoursSlept ? 'input-error' : ''}
            />
            {formik.errors.hoursSlept && formik.touched.hoursSlept && <p className='error'>{formik.errors.hoursSlept}</p>}
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
            className={formik.errors.hoursAllotted && formik.touched.hoursAllotted ? 'input-error' : ''}
            />
            {formik.errors.hoursAllotted && formik.touched.hoursAllotted && <p className='error'>{formik.errors.hoursAllotted}</p>}
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
            className={formik.errors.sleepQuality && formik.touched.sleepQuality ? 'input-error' : ''}
            />
            {formik.errors.sleepQuality && formik.touched.sleepQuality && <p className='error'>{formik.errors.sleepQuality}</p>}
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
            className={formik.errors.sleepMeds && formik.touched.sleepMeds ? 'input-error' : ''}
            />
            {formik.errors.sleepMeds && formik.touched.sleepMeds && <p className='error'>{formik.errors.sleepMeds}</p>}
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
            className={formik.errors.notes && formik.touched.notes ? 'input-error' : ''}
            />
            {formik.errors.notes && formik.touched.notes && <p className='error'>{formik.errors.notes}</p>}
        </FormGroup>

        

        {/* Submit button */}
        <Button className='mt-3 mb-3' type='submit'>
            Submit
        </Button>
    </form>
  );
}

export default AddLog;
