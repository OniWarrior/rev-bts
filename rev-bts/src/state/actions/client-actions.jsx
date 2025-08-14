/*
 * Author: Stephen Aranda
 * File  : client-actions.jsx
 * Desc  : api calls for the client user type
 */

import AxiosWithAuth from "../../components/utils/axios-with-auth";

export const CLIENT_START = "CLIENT_START";
export const CLIENT_SUCCESS = "CLIENT_SUCCESS";
export const CLIENT_FAILURE = "CLIENT_FAILURE";

// getBitcoinWallet: get the bitcoin wallet of the client usertype
// @navigate: parameter used to navigate to wallet.
// @dispatch: parameter used to dispatch actions to reducer function
export const getBitcoinWallet = (navigate) => async (dispatch) => {
    // dispatch start of action
    dispatch({ type: CLIENT_START });
    try {
        // make the api call and save the response
        const response = await AxiosWithAuth().get("/api/users.BitcoinWallet");

        // dispatch success and assign response data to payload
        dispatch({ type: CLIENT_SUCCESS, payload: response.data });

        // navigate to the wallet of client user type
        navigate("/client-dashboard/bitcoin-wallet");

    } catch (error) {
        // dispatch failure with the failure message
        dispatch({ type: CLIENT_FAILURE, payload: error.message });
    }
}



// getPastOrder: api call to get a past order of the client user type
// @navigate: parameter that will navigate to past order of client user type
// @dispatch: parameter that will dispatch action and payload.
export const getPastOrder = (navigate) => async (dispatch) => {
    // dispatch action type
    dispatch({ type: CLIENT_START });

    try {
        // make http request and save the response
        const response = await AxiosWithAuth().get('/api/users/Orders');

        // dispatch success along with the payload
        dispatch({ type: CLIENT_SUCCESS, payload: response.data });

        // navigate to the past orders
        navigate("/client-dashboard/orders");

    } catch (error) {
        // dispatch failure along with failure message
        dispatch({ type: CLIENT_FAILURE, payload: error.message });
    }
}