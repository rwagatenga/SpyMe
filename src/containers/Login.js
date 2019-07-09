/* eslint-disable no-console */
import React, { Component } from 'react';
import { Text, View, StatusBar, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { InputText, Button } from '../components';
import { login } from '../redux/actions/authActions';
import styles from '../styles';
import splashImage from '../assets/img/bg.png';

class Login extends Component {
  static navigationOptions = {
    title: 'Spy Me',
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
    email: '',
    password: '',
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const { login: loginAction } = this.props;
    loginAction({ email, password });
  };

  render() {
    const { email: emailValue, passwordValue } = this.state;
    const {
      auth: { message },
    } = this.props;
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
          <Text style={styles.title}>Login</Text>
          <Text style={{ color: '#FD785C', paddingTop: 10, paddingBottom: 20 }}>
            {message}
          </Text>
          <InputText
            placeholder="Email..."
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
            value={emailValue}
          />
          <InputText
            placeholder="Password..."
            onChangeText={password => this.setState({ password })}
            value={passwordValue}
            secureTextEntry
          />
          <Button title="Login" onPress={this.handleLogin} />
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

Login.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
  login: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    error: PropTypes.bool,
    success: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};
