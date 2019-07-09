import React, { Component } from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { checkAuth } from '../redux/actions/authActions';
import splashImage from '../assets/img/splash.png';
import styles from '../styles';

class Splash extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    setTimeout(() => {
      const { checkAuth: checkAuthAction } = this.props;
      checkAuthAction();
    }, 2000);
  }

  render() {
    return (
      <ImageBackground
        source={splashImage}
        style={styles.fullBackgroundImage}
        resizeMode="cover"
      >
        <StatusBar hidden />
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  checkAuth: () => dispatch(checkAuth()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash);

Splash.propTypes = {
  checkAuth: PropTypes.func.isRequired,
};
