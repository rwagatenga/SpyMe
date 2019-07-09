import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Splash,
  Login,
  Register,
  RegisterCar,
  RegisterDriver,
} from '../containers';

import Drawer from '../components/Drawer';

const AuthNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
});

const DashboardStackNavigator = createStackNavigator(
  {
    Register: {
      screen: Register,
    },
    RegisterDriver: {
      screen: RegisterDriver,
    },
    RegisterCar: {
      screen: RegisterCar,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: 'rgba(109, 225, 242, 0.63)' }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  },
);

const DashboardDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashboardStackNavigator,
    },
  },
  {
    contentComponent: Drawer,
    drawerWidth: 300,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Login: {
      screen: AuthNavigator,
    },
    Dashboard: {
      screen: DashboardDrawerNavigator,
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(AppNavigator);
