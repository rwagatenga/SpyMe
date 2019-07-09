import { combineReducers } from 'redux';
import auth from './authReducer';
import driver from './driverReducer';
import car from './carReducer';

export default combineReducers({
  auth,
  driver,
  car,
});
