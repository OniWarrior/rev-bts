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


    try {
        // dispatch start of action
        dispatch({ type: TRADER_START });

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
        const response = await AxiosWithAuth().post('/api/users/clients/search', client);

        // dispatch success along with response data
        dispatch({ type: TRADER_SUCCESS, payload: response.data });

        // navigate to search results
        navigate("/trader-dashboard/client-search/clients/search");

    } catch (error) {
        // dispatch failure with failure message
        dispatch({ type: TRADER_FAILURE, payload: error.message });

        // alert message that appears once the failure occurs
        alert(`Client not found. ${error.message}`)
    }
}


// postTraderBuyBitcoinTransaction: post a bitcoin purchase by the trader user type
// @clientId: parameter of the id of the client. this is used to purchase bitcoin for client
// @navigate: navigation param used to navigate to trader dashboard after bitcoin purchase.
// @dispatch: dispatch actions and payloads.
export const postTraderBuyBitcoinTransaction = (formattedRequest, navigate) => async (dispatch) => {


    try {
        // dispatch start of action
        dispatch({ type: TRADER_START });

        // make http request and save response 
        const response = await AxiosWithAuth().post('/api/users/trader-buy-bitcoin', formattedRequest);

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
        alert(`${error.message}`);
    }
}

// postTraderSellBitcoinTransaction: post selling some bitcoin on behalf of the client
// @formattedRequest: parameter of the formatted request which includes the order. this is used to sell bitcoin for client
// @navigate: navigation param used to navigate to trader dashboard after bitcoin sell.
// @dispatch: dispatch actions and payloads. 

export const postTraderSellBitcoinTransaction = (formattedRequest, navigate) => async (dispatch) => {


    try {
        // dispatch start of action
        dispatch({ type: TRADER_START });

        // make http request and save response 
        const response = await AxiosWithAuth().post('/api/users/trader-sell-bitcoin', formattedRequest);

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
        alert(`${error.message}`);
    }
}

// cancelTransferOrTransaction: Call that cancels an order or transfer
// @orderOrTransfer: parameter that represents the order or transfer that will be canceled.
// @navigate: allows for the navigation to the trader dashboard.
// @dispatch: allows for action dispatch and payload to reducer function
export const cancelTransferOrTransaction = (orderOrTransfer, navigate) => async (dispatch) => {
    try {
        // dispatch start of action
        dispatch({ type: TRADER_START });

        // make the api call
        const canceledOrderOrTransfer = await AxiosWithAuth().put(`/api/users/cancel-payment-or-transfer`, orderOrTransfer);

        // dispatch success to reducer
        dispatch({ type: TRADER_SUCCESS, payload: canceledOrderOrTransfer.data });

        // navigate to trader dashboard
        navigate("/trader-dashboard");

        // confirmation message that tells trader that operation was successful
        alert("Transfer/Order was successfully canceled");

    } catch (err) {
        // api call fails dispatch failure to reducer
        dispatch({ type: TRADER_FAILURE, payload: err.message });
    }

}


// getTraderPortfolio: retrieve the total value of portfolio 
// @dispatch: paramter to dispatch action types along with assigning payload.
export const getTraderPortfolio = () => async (dispatch) => {
    try {

        // dispatch start of action
        dispatch({ type: TRADER_START });

        // make the api call to retrieve the portfolio value
        const portfolioValue = await AxiosWithAuth().get("/api/users/trader-portfolio");

        //dispatch success to reducer function
        dispatch({ type: TRADER_SUCCESS, payload: portfolioValue.data });



    } catch (err) {
        // dispatch failure along with failure message
        dispatch({ type: TRADER_FAILURE, payload: err.message });
    }
}