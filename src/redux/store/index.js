/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const configureStore = () => {
  const middleware = [thunk];
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  return store;
};

export default configureStore();
