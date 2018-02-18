import { combineReducers } from 'redux';

import createReducer from './create-reducer';

// combining all reducers
const allReducers = combineReducers({
    create: createReducer
})

export default allReducers;