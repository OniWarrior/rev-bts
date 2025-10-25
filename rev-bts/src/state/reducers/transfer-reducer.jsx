import {
    TRANSFER_START,
    TRANSFER_SUCCESS,
    TRANSFER_FAILURE
} from "../actions/transfer-actions";

const initialState = {
    transfer: {},
    loading: false,
    error: ''
}


const transferReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSFER_START:
            return { ...state, loading: true };
        case TRANSFER_SUCCESS:
            return { ...state, payload: action.payload, loading: false };
        case TRANSFER_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

export default transferReducer;