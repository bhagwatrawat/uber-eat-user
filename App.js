/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import RootNavigator from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Auth} from 'aws-amplify';
import SignUp from './src/screens/signUp';
const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
      {/* <SignUp /> */}
      <StatusBar hidden={false} translucent={true} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
});

export default withAuthenticator(App);
