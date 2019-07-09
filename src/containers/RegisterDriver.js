import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { InputText, Button } from '../components';
import { registerDriver } from '../redux/actions/driverActions';
import styles from '../styles';
import splashImage from '../assets/img/bg.png';

class RegisterDriver extends Component {
  static navigationOptions = {
    headerStyle: {
      height: 100,
    },
    headerTintColor: '#fff',
    headerTransparent: true,
    headerTitleStyle: {
      color: 'rgba(109, 225, 242, 0.63)',
      fontWeight: '100',
      textAlign: 'center',
      flex: 1,
    },
  };

  state = {
    name: '',
    email: '',
    address: '',
    phone: '',
  };

  handleRegister = () => {
    const { name, email, address, phone } = this.state;
    const { registerDriver: registerDriverAction } = this.props;
    registerDriverAction({ name, email, address, phone }).finally(() => {
      const {
        driver: { success },
      } = this.props;
      if (success) {
        this.setState({
          name: '',
          email: '',
          address: '',
          phone: '',
        });
      }
    });
  };

  render() {
    const {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      address: addressValue,
    } = this.state;
    const {
      driver: { message, success, loading },
    } = this.props;
    const statusTextStyle = success ? styles.successText : styles.errorText;
    const statusTextColor = loading ? styles.infoText : statusTextStyle;
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
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.title}>Register a Driver</Text>
            {message !== '' && <Text style={statusTextColor}>{message}</Text>}
            <InputText
              placeholder="Name..."
              onChangeText={name => this.setState({ name })}
              value={nameValue}
            />
            <InputText
              placeholder="Email..."
              keyboardType="email-address"
              onChangeText={email => this.setState({ email })}
              value={emailValue}
            />
            <InputText
              placeholder="Address..."
              onChangeText={address => this.setState({ address })}
              value={addressValue}
            />
            <InputText
              placeholder="Phone..."
              keyboardType="numeric"
              onChangeText={phone => this.setState({ phone })}
              value={phoneValue}
            />
            <Button
              title="Register"
              onPress={this.handleRegister}
              disabled={loading}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  driver: state.driver,
});

const mapDispatchToProps = dispatch => ({
  registerDriver: data => dispatch(registerDriver(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterDriver);

RegisterDriver.propTypes = {
  registerDriver: PropTypes.func.isRequired,
  driver: PropTypes.shape({
    error: PropTypes.bool,
    success: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};
