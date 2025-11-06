import * as yup from 'yup'



const Client_Transfer_Money_Form_Schema = yup.object().shape({
    amount_paid: yup.number()
        .required('Money input is required')
        .typeError('You must specify a number')
        .min(0.01, 'The amount cannot be negative')
})

export default Client_Transfer_Money_Form_Schema