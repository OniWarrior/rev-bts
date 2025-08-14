/*
 * Author: Stephen Aranda
 * File  : root-reducer.jsx
 * Desc  : root reducer that combines all other reducer functions into a single reducer object
 */

import { combineReducers } from 'redux';
import { loginReducer } from './login-reducer';
import signupReducer from './signup-reducer';
import managerReducer from './manager-reducer';

const rootReducer = combineReducers({
    loginReducer,
    signupReducer,
    managerReducer

});

export default rootReducer;
