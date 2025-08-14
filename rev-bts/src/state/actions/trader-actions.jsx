/*
 * Author: Stephen Aranda
 * File  : trader-actions.jsx
 * Desc  : actions suite for trader user type
*/

import AxiosWithAuth from "../../components/utils/axios-with-auth";

export const TRADER_START = "TRADER_START";
export const TRADER_SUCCESS = "TRADER_SUCCESS";
export const TRADER_FAILURE = "TRADER_FAILURE";


// getCancelLog: get the cancel log for canceled orders
//@navigate: navigate parameter to navigate to cancel log
//@dispatch: parameter to dispatch action types and payload

export const getCancelLog = (navigate) => async (dispatch) => {
    // dispatch start of action
    dispatch({ type: TRADER_START });

    try {

        // make http request and save response
        const response = await AxiosWithAuth().get('api/users/cancel-log');

        // dispatch success with response data to payload
        dispatch({ type: TRADER_SUCCESS, payload: response.data });

        //navigate to cancel log
        navigate('/trader-dashboard/cancel-log');

    } catch (error) {
        // dispatch failure with failure message
        dispatch({ type: TRADER_FAILURE, payload: error.message });
    }
}