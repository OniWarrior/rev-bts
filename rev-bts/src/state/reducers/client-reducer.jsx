/*
 * Author: Stephen Aranda
 * File  : client_reducer.jsx
 * Desc  : reducer function for client actions
 */

import {
    CLIENT_START,
    CLIENT_SUCCESS,
    CLIENT_FAILURE
} from "../actions/client-actions";


const initialState = {
    client: {},
    loading: false,
    error: ""
}


// reducer function for the client actions
// state by default will be assigned initialState object.
//action is an obj that has the action type and payload which is the response data of an api
// call that either succeeded or failed.
const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIENT_START:
            return { ...state, loading: true };
        case CLIENT_SUCCESS:
            return { ...state, client: action.payload, loading: false };
        case CLIENT_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

export default clientReducer;
