/*
 * Author : Stephen Aranda
 * File   : signup-form-schema.jsx
 * Desc   : form schema for the signup form for signup validation.
 */

import * as yup from "yup";
import 'yup-phone-lite';


const Signup_Form_Schema = yup.object().shape({
    first_name: yup.string()
        .required("Please enter your first name")
        .min(1)
        .max(15)
        .trim(),
    last_name: yup.string()
        .required("Please enter your last name")
        .min(1)
        .max(15)
        .trim(),
    phone_num: yup.string()
        .phone("Please enter a valid phone number xxx-xxx-xxxx")
        .required("Phone number required")
        .trim(),
    cell_num: yup.string()
        .phone("Please enter a valid phone number xxx-xxx-xxxx")
        .required("Phone number required")
        .trim(),
    email: yup.string()
        .email("Please enter a valid email address. ex badc@email.com")
        .required("Email is required")
        .trim(),
    city: yup.string()
        .trim()
        .required("Please enter a city")
        .min(3, "Please enter a valid city name")
        .max(20, "Please enter a valid city name"),
    state: yup.string()
        .trim()
        .required("Please enter a state")
        .min(2, "Please enter a valid state name")
        .max(15, "Please enter a valid state name"),
    street_addr: yup.string()
        .required("Please enter an address")
        .min(10, "Please enter a valid address")
        .max(30, "Please enter a valid address"),
    zip_code: yup.string()
        .trim()
        .required("Please enter a zip code")
        .min(5),
    user_type: yup.string()
        .required("Please select a user type")
        .oneOf(['Client', 'Trader'], "User type must be either 'Client' or 'Trader'"),
    password: yup.string()
        .trim()
        .required("password is required. Please fill out field")
        .min(5, "A minimum of 5 characters is required for password")
})

export default Signup_Form_Schema;