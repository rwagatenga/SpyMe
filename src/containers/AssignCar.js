/* eslint-disable no-console */
import React, { Component } from 'react';
import { View, StatusBar, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import Navigation from '../navigation';
// import PropTypes from 'prop-types';
import { Button } from '../components';
import styles from '../styles';
import splashImage from '../assets/img/bg.png';

class Assign extends Component {
  static navigationOptions = {
    title: 'Register',
    headerStyle: {
      height: 100,
    },
    headerTintColor: '#fff',
    headerTransparent: true,
    headerTitleStyle: {
      color: 'rgba(109, 225, 242, 0.63)',
      fontWeight: '100',
      marginLeft: '35%',
      flex: 1,
    },
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
          <Button
            title="Register a driver"
            onPress={() => Navigation.navigate('RegisterDriver')}
          />
          <Button
            title="Register a car"
            onPress={() => Navigation.navigate('RegisterCar')}
          />
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Assign);
