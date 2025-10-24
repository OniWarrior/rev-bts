import {
    BITCOIN_START,
    BITCOIN_SUCCESS,
    BITCOIN_FAILURE
} from "../actions/bitcoin-actions";

// initial state obj for bitcoin actions
const initialState = {
    bitcoin: {},
    loading: '',
    error: ''
}

// bitcoin reducer function to create new state tree
const bitcoinReducer = (state = initialState, action) => {
    switch (action.type) {
        case BITCOIN_START:
            return { ...state, loading: true };
        case BITCOIN_SUCCESS:
            return { ...state, payload: action.payload, loading: false };
        case BITCOIN_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

export default bitcoinReducer;