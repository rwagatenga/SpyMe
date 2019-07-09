import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const Button = ({ onPress, title, ...props }) => (
  <TouchableOpacity onPress={onPress} {...props} style={styles.buttonContainer}>
    <View style={{ flex: 1 }}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
};

Button.defaultProps = {
  onPress: () => false,
  title: 'Button',
};

export default Button;
