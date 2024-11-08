import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import slotsReducer from './slots/reducer';

export default combineReducers({
  auth: authReducer,
  slots: slotsReducer,    
});