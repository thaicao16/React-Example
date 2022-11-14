/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App/screens/TestNavigation';
// import App from './App/App';
import {name as appName} from './app.json';
// import {Navigation} from './App/components/Navigation'

AppRegistry.registerComponent(appName, () => App);
// export default () => {Navigation};
