import firebase from 'react-native-firebase';
import {
  REGISTER_CAR,
  REGISTER_CAR_SUCCESS,
  REGISTER_CAR_FAIL,
  REGISTER_CAR_DONE,
} from '../actionTypes';

export const registerCar = data => dispatch => {
  dispatch({ type: REGISTER_CAR });
  const newDriverKey = firebase
    .database()
    .ref()
    .child('cars')
    .push().key;

  const updates = {};
  updates[`/cars/${newDriverKey}`] = data;
  return firebase
    .database()
    .ref()
    .update(updates)
    .then(() => {
      dispatch({
        type: REGISTER_CAR_SUCCESS,
        payload: { message: 'A car was registered successfully' },
      });
      setTimeout(() => {
        dispatch({
          type: REGISTER_CAR_DONE,
        });
      }, 1000);
    })
    .catch(error => {
      dispatch({
        type: REGISTER_CAR_FAIL,
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
