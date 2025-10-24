import AxiosWithAuth from "../../components/utils/axios-with-auth";

export const BITCOIN_START = "BITCOIN_START";
export const BITCOIN_SUCCESS = "BITCOIN_SUCCESS";
export const BITCOIN_FAILURE = "BITCOIN_FAILURE";

// getLatestPriceForCPurchase: get the latest price
// of Bitcoin when client user is trying to purchase bitcoin
export const getLatestPriceForCPurchase = (navigate) => async (dispatch) => {
    try {
        // dispatch start of action to reducer function
        dispatch({ type: BITCOIN_START });

        // make api call to get the latest price
        const price = await AxiosWithAuth().get("/api/users/latest");

        // api call successful, dispatch success and payload to reducer function
        dispatch({ type: BITCOIN_SUCCESS, payload: price });

        // navigate to the buy bitcoin page for the client purchase
        navigate("/client-dashboard/buy-bitcoin");



    } catch (err) {
        // api call failure if this point is reached
        // dispatch failure to reducer function along with the failure message
        dispatch({ type: BITCOIN_FAILURE, payload: err.message });

    }

}


// getLatestPriceForCSell: get the latest price for bitcoin
// when a client is making a sell.
export const getLatestPriceForCSell = (navigate) => async (dispatch) => {
    try {

        //dispatch start of action
        dispatch({ type: BITCOIN_START });

        // make api call
        const price = await AxiosWithAuth().get("/api/users/latest");

        // api call successful
        // dispatch success to reducer function along with the payload
        dispatch({ type: BITCOIN_SUCCESS, payload: price });

        // navigate to the sell bitcoin page
        navigate("/client-dashboard/sell-bitcoin");

    } catch (err) {
        // api call failure if this point is reached
        // dispatch failure to reducer function along with the failure message
        dispatch({ type: BITCOIN_FAILURE, payload: err.message });
    }

}


// getLatestPriceForTBuy: gets the latest price of bitcoin for the trader
// with making a purchase on behalf of a client
export const getLatestPriceForTBuy = (navigate, clientId) => async (dispatch) => {
    try {
        // dispatch start of action to reducer
        dispatch({ type: BITCOIN_START });

        // make the api call
        const price = await AxiosWithAuth().get("/api/users/latest");

        // api call successful, dispatch payload and success message
        dispatch({ type: BITCOIN_SUCCESS, payload: price });

        // navigate to the buy bitcoin page for the trader using client id
        navigate(`/trader-dashboard/trader-client-search/clients/${clientId}/trader-buy-bitcoin`);


    } catch (err) {
        // api call is a failure if this point is reached.
        // dispatch failure
        dispatch({ type: BITCOIN_FAILURE, payload: err.message });
    }

}

// getLatestPriceForTSell: gets the latest price of bitcoin
// for trader when selling bitcoin on behalf of the client
export const getLatestPriceForTSell = (navigate, clientId) => async (dispatch) => {
    try {
        // dispatch start of action
        dispatch({ type: BITCOIN_START });

        //make api call to retrieve price
        const price = await AxiosWithAuth().get("/api/users/latest");

        // dispatch success to reducer
        dispatch({ type: BITCOIN_SUCCESS, payload: price });

        // navigate to the sell page for the trader
        navigate(`/trader-dashboard/trader-client-search/clients/${clientId}/trader-sell-bitcoin`);

    } catch (err) {
        // api call is a failure, dispatch message to reducer
        dispatch({ type: BITCOIN_FAILURE, payload: err.message });
    }
}