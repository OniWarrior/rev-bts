/*
 * Author: Stephen Aranda
 * File  : login-actions.jsx
 * Desc  : action suite(api calls) for login 
 */

import axios from "axios";


// Strings that are dispatched to reducer function and redux logger
// indicating start, success, failure of an action(api call).
export const LOGIN_START = "LOGIN_START";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";



// API call for posting a login of a user
export const postLogin = (navigate, login) => async (dispatch) => {

    try {

        // dispatch the start of the action
        dispatch({ type: LOGIN_START });



        // execute the api call and store the response 
        const response = await axios.post("https://bitcoin-transaction-system-be-72349974fde7.herokuapp.com/api/auth/login", login);

        // dispatch success along with the success payload
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });

        // store jwt in local storage
        localStorage.setItem("token", response.data.token);

        // store ur in local storage
        localStorage.setItem("ur", response.data.ur)

        // look at the user type and navigate to a dashboard
        switch (response.data.ur) {
            case "Trader": navigate('/trader-dashboard'); break;
            case "Client": navigate("/client-dashboard"); break;
            case "Manager": navigate("/manager-dashboard"); break;
            default:
                return;
        }

    } catch (error) {

        // failure dispatch failure
        dispatch({ type: LOGIN_FAILURE, payload: error.message });


    }

}

