import {
  CHECK_AUTH,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actionTypes';

const initialState = {
  success: false,
  loading: false,
  error: false,
};
/**
 * Auth reducers
 */
export default (state = initialState, action) => {
  const payload = action.payload || {};
  switch (action.type) {
    case CHECK_AUTH:
      return {
        ...state,
        success: false,
        loading: false,
        error: false,
      };
    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        success: false,
        loading: true,
        error: false,
        message: payload.message || '',
      };
    case CHECK_AUTH_FAIL:
      return {
        ...state,
        success: false,
        loading: false,
        error: true,
        message: payload.message || '',
      };
    case LOGIN:
      return {
        ...state,
        success: false,
        loading: true,
        error: false,
        message: 'Logging in ...',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: false,
        message: payload.message || '',
      };
    case LOGIN_FAIL:
      return {
        ...state,
        success: false,
        loading: false,
        error: true,
        message: payload.message || '',
      };
    default:
      return state;
  }
};
