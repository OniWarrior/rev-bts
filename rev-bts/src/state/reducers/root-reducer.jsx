/*
 * Author: Stephen Aranda
 * File  : root-reducer.jsx
 * Desc  : root reducer that combines all other reducer functions into a single reducer object
 */

import { combineReducers } from 'redux';
import { loginReducer } from './login-reducer';
import signupReducer from './signup-reducer';
import managerReducer from './manager-reducer';
import clientReducer from './client-reducer';
import traderReducer from './trader-reducer';
import transferReducer from './transfer-reducer';

const rootReducer = combineReducers({
    loginReducer,
    signupReducer,
    managerReducer,
    clientReducer,
    traderReducer,
    transferReducer

});

export default rootReducer;
