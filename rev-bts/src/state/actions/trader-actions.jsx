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


// getClient: get client's info
// @client: client info obj that's used for client retrieval
// @navigate: navigate parameter that navigates to search results of client search
// @dispatch: dispatch action types and assign to payload
export const getClient = (client, navigate) => async (dispatch) => {
    // dispatch start of action
    dispatch({ type: TRADER_START });

    try {
        // make http request and save response 
        const response = await AxiosWithAuth().post('/api/users/client/search', client);

        // dispatch success along with response data
        dispatch({ type: TRADER_SUCCESS, payload: response.data });

        // navigate to search results
        navigate("/trader-dashboard/trader-client-search/clients/search");

    } catch (error) {
        // dispatch failure with failure message
        dispatch({ type: TRADER_FAILURE, payload: error.message });
    }
}


// postTraderBuyBitcoinTransaction: post a bitcoin purchase by the trader user type
// @clientId: parameter of the id of the client. this is used to purchase bitcoin for client
// @navigate: navigation param used to navigate to trader dashboard after bitcoin purchase.
// @dispatch: dispatch actions and payloads.
export const postTraderBuyBitcoinTransaction = (clientId, navigate) => async (dispatch) => {
    // dispatch start of action
    dispatch({ type: TRADER_START });

    try {

        // make http request and save response 
        const response = await AxiosWithAuth().post('/api/user/TraderBuyBitcoin', clientId);

        // dispatch success and assign response data
        dispatch({ type: TRADER_SUCCESS, payload: response.data });

        // navigate back to trader dashboard
        navigate('/trader-dashboard');

        // display the message and amount posted
        const { message, amount } = response.data
        alert(`message: ${message}\namount: ${amount}`);

    } catch (error) {
        // dispatch failure action and failure message
        dispatch({ type: TRADER_FAILURE, payload: error.message });
    }
}

// postTraderSellBitcoinTransaction: post selling some bitcoin on behalf of the client
// @clientId: parameter of the id of the client. this is used to sell bitcoin for client
// @navigate: navigation param used to navigate to trader dashboard after bitcoin sell.
// @dispatch: dispatch actions and payloads. 

export const postTraderSellBitcoinTransaction = (clientId, navigate) => async (dispatch) => {
    // dispatch start of action
    dispatch({ type: TRADER_START });

    try {

        // make http request and save response 
        const response = await AxiosWithAuth().post('/api/user/TraderSellBitcoin', clientId);

        // dispatch success and assign response data
        dispatch({ type: TRADER_SUCCESS, payload: response.data });

        // navigate back to trader dashboard
        navigate('/trader-dashboard');

        // display the message and amount posted
        const { message, amount } = response.data
        alert(`message: ${message}\namount: ${amount}`);

    } catch (error) {
        // dispatch failure action and failure message
        dispatch({ type: TRADER_FAILURE, payload: error.message });
    }
}