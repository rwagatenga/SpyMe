import {
  REGISTER_DRIVER,
  REGISTER_DRIVER_SUCCESS,
  REGISTER_DRIVER_FAIL,
  REGISTER_DRIVER_DONE,
} from '../actionTypes';

const initialState = {
  success: false,
  loading: false,
  error: false,
};
/**
 * Driver registration reducers
 */
export default (state = initialState, action) => {
  const payload = action.payload || {};
  switch (action.type) {
    case REGISTER_DRIVER:
      return {
        ...state,
        success: false,
        loading: true,
        error: false,
        message: 'Registering ...',
      };
    case REGISTER_DRIVER_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: false,
        message: payload.message || '',
      };
    case REGISTER_DRIVER_FAIL:
      return {
        ...state,
        success: false,
        loading: false,
        error: true,
        message: payload.message || '',
      };
    case REGISTER_DRIVER_DONE:
      return {
        ...state,
        success: false,
        loading: false,
        error: false,
        message: '',
      };
    default:
      return state;
  }
};
