import AxiosWithAuth from "../../components/utils/axios-with-auth";

export const TRANSFER_START = "TRANSFER_START";
export const TRANSFER_SUCCESS = "TRANSFER_SUCCESS";
export const TRANSFER_FAILURE = "TRANSFER_FAILURE";


// fetchTransfers: retrieves all transfers made to the trader by a specific client

export const fetchTransfers = (cleintId) => async (dispatch) => {
    try {

        // dispatch start of action
        dispatch({ type: TRANSFER_START });

        // make api call
        const transfers = await AxiosWithAuth().get(`/api/users/clients/${cleintId}/payments`);



    } catch (err) {
        // api call failure, dispatch to reducer
        dispatch({ type: TRANSFER_FAILURE, payload: err.message });
    }
}