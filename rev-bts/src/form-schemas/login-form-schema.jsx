/*
 * Author: Stephen Aranda
 * File  : login-form-schema.jsx 
 * Desc  : form schema for the login component
 */

import * as yup from 'yup';

const Login_Form_Schema = yup.object().shape({
    email: yup.string()
        .required("Please enter your email")
        .trim(),
    password: yup.string()
        .required("Please enter your password")
        .trim()
})

export default Login_Form_Schema;