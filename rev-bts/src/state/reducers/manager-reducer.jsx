/*
 * Author : Stephen Aranda
 * File   : manager-reducer.jsx
 * Desc   : reducer function for manager actions.
 * */

import {
    MANAGER_START,
    MANAGER_SUCCESS,
    MANAGER_FAILURE
} from "../actions/manager-actions";

initialState = {
    totalTransactions: {},
    loading: false,
    error: ""
}


// reducer function for manager actions
const managerReducer = (state = initialState, action) => {
    switch (action.type) {
        case MANAGER_START:
            return { ...state, loading: true };
        case MANAGER_SUCCESS:
            return { ...state, payload: action.payload, loading: false };
        case MANAGER_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

export default managerReducer;