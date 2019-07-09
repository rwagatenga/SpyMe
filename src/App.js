import React from 'react';
import { Provider } from 'react-redux';
import NavigationService from './navigation';
import AppContainer from './navigation/routes';
import store from './redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
