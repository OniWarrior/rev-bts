/*
 * Author: Stephen Aranda
 * File  : signup-actions.jsx
 * Desc  : api calls for signing up for a new account
 * */

import axios from 'axios'

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

// api call to post a new account
// @navigate: parameter for navigation after successful account registration
// @signup: parameter that is the signup object that contains registration information

export const postRegisterAccount = (navigate, signup) => async (dispatch) => {

    try {
        // dispatch the start of an action
        dispatch({ type: SIGNUP_START });

        // try to post, if successful, store the response data
        const response = await axios.post("http://localhost:8000/api/auth/signup", signup);

        // dispatch the success of the action and send the payload
        dispatch({ type: SIGNUP_SUCCESS, payload: response.data });

        // navigate to the login page
        navigate('/login');

    } catch (error) {

        // dispatch failure along with the failure message from the server.
        dispatch({ type: SIGNUP_FAILURE, payload: error.message });
    }
}

