import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import styles from '../styles';

const InputText = ({ placeholder, ...props }) => (
  <View style={styles.inputContainer}>
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder={placeholder}
        onChangeText={() => false}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor="rgba(255,255,255,0.5)"
        style={{ color: '#fff' }}
        {...props}
      />
    </View>
  </View>
);

InputText.propTypes = {
  placeholder: PropTypes.string,
};

InputText.defaultProps = {
  placeholder: '',
};

export default InputText;
