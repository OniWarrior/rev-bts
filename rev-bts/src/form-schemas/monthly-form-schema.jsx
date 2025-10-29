import * as yup from 'yup'

const Monthly_Form_Schema = yup.object().shape({
    monthly_date: yup.string()
        .required()

})

export default Monthly_Form_Schema;