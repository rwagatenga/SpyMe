import {
  REGISTER_CAR,
  REGISTER_CAR_SUCCESS,
  REGISTER_CAR_FAIL,
  REGISTER_CAR_DONE,
} from '../actionTypes';

const initialState = {
  success: false,
  loading: false,
  error: false,
};
/**
 * Car registration reducers
 */
export default (state = initialState, action) => {
  const payload = action.payload || {};
  switch (action.type) {
    case REGISTER_CAR:
      return {
        ...state,
        success: false,
        loading: true,
        error: false,
        message: 'Registering ...',
      };
    case REGISTER_CAR_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: false,
        message: payload.message || '',
      };
    case REGISTER_CAR_FAIL:
      return {
        ...state,
        success: false,
        loading: false,
        error: true,
        message: payload.message || '',
      };
    case REGISTER_CAR_DONE:
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
