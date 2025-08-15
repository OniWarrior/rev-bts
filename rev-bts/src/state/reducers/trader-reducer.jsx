/*
 * Author: Stephen Aranda
 * File  : trader-reducer.jsx
 * Desc  : reducer function for the trader action suite/
 */

import {
    TRADER_START,
    TRADER_SUCCESS,
    TRADER_FAILURE
} from "../actions/trader-actions";

initialState = {
    trader: {},
    loading: false,
    error: ""
}

const traderReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRADER_START:
            return { ...state, loading: true };
        case TRADER_SUCCESS:
            return { ...state, payload: action.payload, loading: false };
        case TRADER_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }

}

export default traderReducer;