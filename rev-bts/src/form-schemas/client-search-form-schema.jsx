import * as yup from 'yup';

const Client_Search_Form_Schema = yup.object().Shape({
    first_name: yup.string().trim(),
    last_name: yup.string().trim(),
    email: yup.string()
        .email("Please enter a valid email address. ex badc@email.com")
        .required("Email is required")
        .trim()
})

export default Client_Search_Form_Schema;