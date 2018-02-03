/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';
import strings, { onSetLanguage } from './helpers/strings';
import LocalizedStrings from 'react-native-localization';

export default class App extends Component {

  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {strings.message}
        </Text>
        <Text style={styles.welcome}>
          {strings.formatString(strings.messageParameter, "International", "App")}
        </Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
