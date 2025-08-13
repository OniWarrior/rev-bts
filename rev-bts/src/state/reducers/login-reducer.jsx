/*
 * Author : Stephen Aranda
 * File   : login_reducer.jsx
 * Desc   : reducer function for login state
 */

import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_START
} from "../actions/login-actions";

initialState = {
    login: {},
    loading: false,
    error: ""
}

// reducer function that creates a new state tree based on action type of login api call
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, login: action.payload, loading: false };
        case LOGIN_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

