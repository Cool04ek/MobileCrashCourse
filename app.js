/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import TopicsScreen from './src/TopicsScreen.js'

Navigation.registerComponent('TopicsScreen', () => TopicsScreen);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'TopicsScreen',
    title: 'Navigation Bootstrap'
  }
});
