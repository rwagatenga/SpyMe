import firebase from 'react-native-firebase';
import {
  REGISTER_DRIVER,
  REGISTER_DRIVER_SUCCESS,
  REGISTER_DRIVER_FAIL,
  REGISTER_DRIVER_DONE,
} from '../actionTypes';

export const registerDriver = data => dispatch => {
  dispatch({ type: REGISTER_DRIVER });
  const newDriverKey = firebase
    .database()
    .ref('')
    .child('drivers')
    .push().key;

  const updates = {};
  updates[`/drivers/${newDriverKey}`] = data;
  return firebase
    .database()
    .ref()
    .update(updates)
    .then(() => {
      dispatch({
        type: REGISTER_DRIVER_SUCCESS,
        payload: { message: 'Driver was registered successfully' },
      });
      setTimeout(() => {
        dispatch({
          type: REGISTER_DRIVER_DONE,
        });
      }, 1000);
    })
    .catch(error => {
      dispatch({
        type: REGISTER_DRIVER_FAIL,
        payload: { message: error.response },
      });
    });
};

export const updateDriver = data => {
  const newPostKey = firebase
    .database()
    .ref()
    .child('drivers')
    .push().key;

  const updates = {};
  updates[`/drivers/${newPostKey}`] = data;
  return firebase
    .database()
    .ref()
    .update(updates);
};
