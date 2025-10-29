import * as yup from 'yup'

const Daily_Form_Schema = yup.object().shape({
    daily_date: yup.date()
        .required()

})

export default Daily_Form_Schema;