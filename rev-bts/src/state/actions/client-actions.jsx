/*
 * Author: Stephen Aranda
 * File  : client-actions.jsx
 * Desc  : api calls for the client user type
 */

import AxiosWithAuth from "../../components/utils/axios-with-auth";

export const CLIENT_START = "CLIENT_START";
export const CLIENT_SUCCESS = "CLIENT_SUCCESS";
export const CLIENT_FAILURE = "CLIENT_FAILURE";


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