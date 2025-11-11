import * as yup from 'yup'

const Trader_Sell_Form_Schema = yup.object().shape({
    Bitcoin_balance: yup.number()
        .required('The amount of bitcoin must be entered.')
        .typeError('You must specify a number')
        .min(0.01, 'The amount cannot be negative'),
    Bitcoin_price: yup.number()

})

export default Trader_Sell_Form_Schema;