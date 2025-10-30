import * as yup from 'yup'

const Monthly_Form_Schema = yup.object().shape({
    date: yup.date().required()

})

export default Monthly_Form_Schema;