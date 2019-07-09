import { StyleSheet } from 'react-native';
import componentsStyles from './components';
import containersStyles from './containers';
import common from './common';
import drawer from './drawer';

export default StyleSheet.create({
  ...componentsStyles,
  ...containersStyles,
  ...common,
  ...drawer,
});
