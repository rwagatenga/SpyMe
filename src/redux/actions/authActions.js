import firebase from 'react-native-firebase';
import Navigation from '../../navigation';
import { CHECK_AUTH_SUCCESS, CHECK_AUTH_FAIL } from '../actionTypes';

export const login = ({ email, password }) => dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ type: CHECK_AUTH_SUCCESS });
      return Navigation.navigate('Dashboard');
    })
    .catch(error => {
      dispatch({ type: CHECK_AUTH_FAIL, payload: { message: error.message } });
    });
};

export const checkAuth = () => dispatch => {
  if (firebase.auth().currentUser !== null) {
    dispatch({ type: CHECK_AUTH_SUCCESS });
    return Navigation.navigate('Dashboard');
  }
  dispatch({ type: CHECK_AUTH_SUCCESS });
  return Navigation.navigate('Login');
};
export const logout = () => {
  firebase.auth().signOut();
};
