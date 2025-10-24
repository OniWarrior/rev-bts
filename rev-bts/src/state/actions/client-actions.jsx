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
        const response = await AxiosWithAuth().get("/api/users/BitcoinWallet");

        // dispatch success and assign response data to payload
        dispatch({ type: CLIENT_SUCCESS, payload: response.data });

        // navigate to the wallet of client user type
        navigate("/client-dashboard/bitcoin-wallet");

    } catch (error) {
        // dispatch failure with the failure message
        dispatch({ type: CLIENT_FAILURE, payload: error.message });
    }
}



// getPastOrders: api call to get a past order of the client user type
// @navigate: parameter that will navigate to past order of client user type
// @dispatch: parameter that will dispatch action and payload.
export const getPastOrders = (navigate) => async (dispatch) => {
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

// postBuyBitcoin: post a bitcoin order for the client user type
// @order: parameter object for the bitcoin order.
// @navigate: parameter that will navigate you back to client user dashboard
// @dispatch: parameter that will dispatch action types and payloads
export const postBuyBitcoin = (order, navigate) => async (dispatch) => {
    // dispatch start of action
    dispatch({ type: CLIENT_START });

    try {

        // make http request and save the response data
        const response = await AxiosWithAuth().post('/api/users/BuyBitcoin', order);

        // dispatch action success along with response data
        dispatch({ type: CLIENT_SUCCESS, payload: response.data });

        // navigate back to client dashboard
        navigate("/client-dashboard")


        // show a message of success
        const { message, amount } = response.data;
        alert(`message:${message}\namount: ${amount}`);


    } catch (error) {
        // dispatch failure with failure message
        dispatch({ type: CLIENT_FAILURE, payload: error.message });
    }

}


// postSellBitcoin: api call to post the selling of bitcoin for the client user type

export const postSellBitcoin = (order, navigate) => async (dispatch) => {
    // dispatch start of action
    dispatch({ type: CLIENT_START });
    try {

        // make http request and save response
        const response = await AxiosWithAuth().post("/api/users/SellBitCoin", order)

        // dispatch success along with the payload
        dispatch({ type: CLIENT_SUCCESS, payload: response.data });

        // navigate back to dashboard
        navigate('/client-dashboard');

        // show the sold bitcoin
        alert(response.data);

    } catch (error) {
        //dispatch failure along with failure message
        dispatch({ type: CLIENT_FAILURE, payload: error.message });
    }
}


// postMoneyTranser: api call to post a money transfer to client user type account-post a deposit
// @transfer: parameter object for the transfer amount.
// @navigate: paramter to navigate back to dashboard.
// @dispatch: paramter to dispatch action types along with assigning payload.
export const postMoneyTranser = (transfer, navigate) => async (dispatch) => {
    // dispatch start of action
    dispatch({ type: CLIENT_START });

    try {

        // make http request and save the response
        const response = await AxiosWithAuth().post('/api/users/TransferMoney', transfer)

        // dispatch success along with the payload
        dispatch({ type: CLIENT_SUCCESS, payload: response.data });

        // navigate back to client dashboard
        navigate('/client-dashboard');

        // show the confirmed money transfer
        alert(response.data);

    } catch (error) {
        // dispatch failure along with failure message
        dispatch({ type: CLIENT_FAILURE, payload: error.message });
    }
}

