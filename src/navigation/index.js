/* eslint-disable no-underscore-dangle */
import {
  StackActions,
  NavigationActions,
  DrawerActions,
} from 'react-navigation';

let navigator;

const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

const navigate = (routeName, params) =>
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );

const redirect = routeName =>
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    }),
  );

const toggleDrawer = () => navigator.dispatch(DrawerActions.openDrawer());

export default {
  redirect,
  navigate,
  setTopLevelNavigator,
  toggleDrawer,
};
