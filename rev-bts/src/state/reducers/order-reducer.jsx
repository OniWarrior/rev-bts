import {
    ORDER_START,
    ORDER_SUCCESS,
    ORDER_FAILURE
} from '../actions/order-actions'

const initialState = {
    orders: {},
    loading: false,
    error: ""
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_START:
            return { ...state, loading: true };
        case ORDER_SUCCESS:
            return { ...state, orders: action.payload, loading: false };
        case ORDER_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}


export default orderReducer;