import * as yup from 'yup'

const Trader_Sell_Form_Schema = yup.object().shape({
    Bitcoin_balance: yup.number()
        .required('The amount of bitcoin must be entered.')
        .typeError('You must specify a number')
        .min(0.01, 'The amount cannot be negative'),
    Bitcoin_price: yup.number(),
    email: yup.string()
        .trim()
        .required()
        .required("Email/Password is required. Please fill out field")
        .email()

})

export default Trader_Sell_Form_Schema;