/*
 * Author: Stephen Aranda
 * File  : login.jsx
 * Desc  : login component for the users to login to their account
 */

import React from "react";
import NavBar from "./navbar";
import useFormValidation from "../hooks/useFormValidation";
import Login_Form_Schema from '../form-schemas/login-form-schema';

const Login = () => {

    // Initial values and errors for login component text boxes
    const initialValues = {
        email: '',
        password: ''
    }

    const initialErrors = {
        email: '',
        password: ''
    }


    // local state vars for login and errors
    const [login, errors, setLogin] = useFormValidation(Login_Form_Schema, initialValues, initialErrors);

    // handler for the input change in text boxes
    const change = (event) => {
        setLogin(event, Login_Form_Schema);
    }

    return (
        <div>
            <NavBar />
        </div>
    )
}

export default Login;