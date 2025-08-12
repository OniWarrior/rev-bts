/*
 * Author: Stephen Aranda
 * File  : login.jsx
 * Desc  : login component for the users to login to their account
 */

import React from "react";
import NavBar from "./navbar";
import useFormValidation from "../hooks/useFormValidation";
import Login_Form_Schema from '../form-schemas/login-form-schema';
import "../styles/login.css";

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
            <div className="login-box">
                <div className="login-form-container">
                    <form className="login-form">
                        <h2>Login</h2>
                        <br />

                        <div className='login-input-group'>
                            <div className="login-label-group">
                                <label className='label-input-group' htmlFor='email'>
                                    Email:</label>
                                <label className="label-input-group" htmlFor="password">
                                    Password:</label>
                            </div>
                            <div className="login-txt-box-group">


                                <input className='email-box'
                                    id='email'
                                    type='text'
                                    name='email'
                                    placeholder='email'
                                    onChange={change}
                                />



                                <div className='errors'>
                                    <p>{errors.email}</p>
                                </div>


                                <input className="password-code-box"
                                    id='password'
                                    type="text"
                                    name="password"
                                    placeholder="Password"
                                    onChange={change}
                                />

                                <div className="errors">
                                    <p>{errors.password}</p>
                                </div>

                            </div>

                        </div>


                        <br></br>
                        <button
                            type='submit'
                            className='login-submit'


                        >
                            Login
                        </button>
                    </form>
                    <div className="login-img-container"></div>
                </div>
            </div>
        </div>
    )
}

export default Login;