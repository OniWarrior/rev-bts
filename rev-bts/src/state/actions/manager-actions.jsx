/*
 * Author: Stephen Aranda
 * File  : manager-actions.jsx
 * Desc  : api calls for the manager user type
 * * */

import AxiosWithAuth from "../../components/utils/axios-with-auth";

export const MANAGER_START = "MANAGER_START";
export const MANAGER_SUCCESS = "MANAGER_SUCCESS";
export const MANAGER_FAILURE = "MANAGER_FAILURE";

// api call to retrieve total daily transactions
//@date: The param date in which you want to retrieve the daily transactions
//@navigate: param navigate to daily after successful retrieval
export const getTotalDailyTransactions = (date, navigate) => async (dispatch) => {
    // dispatch start of action
    dispatch({ type: MANAGER_START });

    try {

        // make the api call and save the response data
        const response = await AxiosWithAuth().post('api/users/daily', date);

        // dispatch success and assign the response data to payload
        dispatch({ type: MANAGER_SUCCESS, payload: response.data });

        // navigate to daily transactions page.
        navigate('/manager-dashboard/daily');

    } catch (error) {
        // dispatch failure and failure message
        dispatch({ type: MANAGER_FAILURE, payload: error.message });
    }

}