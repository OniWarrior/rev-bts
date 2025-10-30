import * as yup from 'yup'

const Weekly_Form_Schema = yup.object().shape({
    start_date: yup.date().required('A start date is required'),
    end_date: yup.date().required('An end date is required')
})

export default Weekly_Form_Schema;