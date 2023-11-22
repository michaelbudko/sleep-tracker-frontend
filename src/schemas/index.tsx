import * as yup from "yup";

const formSchema = yup.object().shape({
    night: yup.string()
        .required('Night is required')
        .matches(/^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/i, 'Invalid Day of the Week'),

    date: yup.date()
        .required('Date is required')
        .transform((originalValue) => {
            const parsedDate = new Date(originalValue);
            return isNaN(parsedDate.getTime()) ? undefined : parsedDate;
        }),
    
    timeWentToBed: yup.string()
        .required('Time Went To Bed is required')
        .matches(/^(0?[1-9]|1[0-2]):[0-5][0-9]([APMapm]{2})$/, 'Invalid time format. Use hh:mmam or hh:mmpm'),

    timeTookToFallAsleep: yup.string()
        .required('Time Took to Fall Asleep is required')
        .matches(/^(0?[0-9]|1[0-2]):[0-5][0-9]$/, 'Invalid time format. Use hh:mm or h:mm'),
    
    numTimesWokeUp: yup.number()
        .integer('Must be a whole number')
        .min(0, 'Must be a positive integer or zero')
        .required('Number of times woke up is required'),
    
    finalAwakening: yup.string()
        .required('Final Awakening is required')
        .matches(/^(0?[1-9]|1[0-2]):[0-5][0-9]([APMapm]{2})$/, 'Invalid time format. Use hh:mmam or hh:mmpm'),

    gotOutOfBed: yup.string()
        .required('Got Out of Bed is required')
        .matches(/^(0?[1-9]|1[0-2]):[0-5][0-9]([APMapm]{2})$/, 'Invalid time format. Use hh:mmam or hh:mmpm'),

    hoursSlept: yup.string()
        .required('Hours Slept is required')
        .matches(/^(0?[0-9]|1[0-2]):[0-5][0-9]$/, 'Invalid time format. Use hh:mm or h:mm'),

    hoursAllotted: yup.string()
        .required('Hours Allotted is required')
        .matches(/^(0?[0-9]|1[0-2]):[0-5][0-9]$/, 'Invalid time format. Use hh:mm or h:mm'),

    sleepQuality: yup.number()
        .integer('Must be a whole number')
        .min(1, 'Sleep Quality must be between 1 and 5')
        .max(5, 'Sleep Quality must be between 1 and 5')
        .required('Sleep Quality is required'),

    sleepMeds: yup.string().required('Sleep Medications is required'),

    notes: yup.string().required('Notes is required'),
})

export default formSchema;

