/* eslint-disable no-console */
import React, { Component } from 'react';
import { Text, View, StatusBar, ImageBackground } from 'react-native';
import firebase from 'react-native-firebase';
import Navigation from '../navigation';
import styles from '../styles';
import splashImage from '../assets/img/bg.png';

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Spy Me',
    headerTintColor: '#fff',
    headerTransparent: true,
    headerTitleStyle: {
      color: 'rgba(109, 225, 242, 0.63)',
      fontWeight: '100',
      flex: 1,
    },
  };

  state = {
    email: '',
    password: '',
  };

  componentDidMount = () => {
    Navigation.toggleDrawer();
  };

  signIn = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(resp => console.log(resp))
      .catch(error => console.log(error.message));
  };

  render() {
    return (
      <ImageBackground
        source={splashImage}
        style={styles.fullBackgroundImage}
        resizeMode="cover"
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(14, 20, 47, 1)"
        />
        <View style={styles.container}>
          <Text style={styles.title}>Dashboard</Text>
        </View>
      </ImageBackground>
    );
  }
}
