// src/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';
import slotReducer from './slotReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  booking: bookingReducer,
  slots: slotReducer,
});

export default rootReducer;
