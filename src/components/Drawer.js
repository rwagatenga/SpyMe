import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../navigation';
import styles from '../styles';

export default class Drawer extends Component {
  navigateToScreen = route => () => {
    Navigation.navigate(route);
  };

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <View style={styles.drawerContainer}>
        <ScrollView>
          <View style={{ color: '#fff', flexDirection: 'row' }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
              }}
            >
              <Icon name="ios-contact" size={50} color="#fff" />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
              }}
            >
              <Text style={{ color: '#fff' }}>Emery Muhozi</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.navMenu}
            onPress={this.navigateToScreen('Register')}
          >
            <Text style={styles.navText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navMenu}
            onPress={this.navigateToScreen('Register')}
          >
            <Text style={styles.navText}>Assign</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navMenu}
            onPress={this.navigateToScreen('Register')}
          >
            <Text style={styles.navText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navMenu}
            onPress={this.navigateToScreen('Register')}
          >
            <Text style={styles.navText}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            &copy; Spy Me &nbsp;
            {currentYear}
          </Text>
        </View>
      </View>
    );
  }
}

