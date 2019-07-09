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
import { registerCar } from '../redux/actions/carActions';
import styles from '../styles';
import splashImage from '../assets/img/bg.png';

class RegisterCar extends Component {
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
    type: '',
    plate: '',
  };

  handleRegister = () => {
    const { name, type, plate } = this.state;
    const { registerCar: registerCarAction } = this.props;
    registerCarAction({ name, type, plate }).finally(() => {
      const {
        car: { success },
      } = this.props;
      if (success) {
        this.setState({
          name: '',
          type: '',
          plate: '',
        });
      }
    });
  };

  render() {
    const { name: nameValue, type: typeValue, plate: plateValue } = this.state;
    const {
      car: { message, success, loading },
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
            <Text style={styles.title}>Register a Car</Text>
            {message !== '' && <Text style={statusTextColor}>{message}</Text>}
            <InputText
              placeholder="Name..."
              onChangeText={name => this.setState({ name })}
              value={nameValue}
            />
            <InputText
              placeholder="Type..."
              onChangeText={type => this.setState({ type })}
              value={typeValue}
            />
            <InputText
              placeholder="Plate number..."
              onChangeText={plate => this.setState({ plate })}
              value={plateValue}
            />

            <Button title="Register" onPress={this.handleRegister} />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  car: state.car,
});

const mapDispatchToProps = dispatch => ({
  registerCar: data => dispatch(registerCar(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterCar);

RegisterCar.propTypes = {
  registerCar: PropTypes.func.isRequired,
  car: PropTypes.shape({
    error: PropTypes.bool,
    success: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};
