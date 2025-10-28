/*
 * Author: Stephen Aranda
 * File  : signup-reducer.jsx
 * Desc  : signup reducer function 
 * */

import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from "../actions/signup-actions";

const initialState = {
    signup: {},
    loading: false,
    error: ""
}

// reducer function for signup api calls
const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_START:
            return { ...state, loading: true };
        case SIGNUP_SUCCESS:
            return { ...state, signup: action.payload, loading: false };
        case SIGNUP_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

export default signupReducer;