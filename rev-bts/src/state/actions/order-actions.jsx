import AxiosWithAuth from "../../components/utils/axios-with-auth";

export const ORDER_START = "ORDER_START";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_FAILURE = "ORDER_FAILURE";


// fetchTransactions: fetch all past orders made by the clients
export const fetchTransactions = (navigate, clientId) => async (dispatch) => {

    try {

        // dispatch start of action
        dispatch({ type: ORDER_START });

        // make api call 
        const transactions = await AxiosWithAuth().get(`api/users/clients/${clienId}/transactions`);

        // dispatch success 
        dispatch({ type: ORDER_SUCCESS, payload: transactions });

        // navigate to the transactions page
        navigate(`/trader-dashboard/trader-client-search/clients/${clientId}/transactions`);

    } catch (err) {
        // api call is a failure if this point is reached
        dispatch({ type: ORDER_FAILURE, payload: err.message });
    }

}