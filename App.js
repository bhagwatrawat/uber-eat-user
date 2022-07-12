/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import Homescreen from './src/screens/homescreen';
import DetailScreen from './src/screens/detailscreen';
import DishDetailScreen from './src/screens/dishDetailScreen';
import BasketScreen from './src/screens/basketScreen';
import OrdersScreen from './src/screens/ordersScreen';
const App = () => {
  return (
    <View style={styles.container}>
      {/* our food item */}
      {/* <Homescreen /> */}
      {/* <DetailScreen /> */}
      {/* <DishDetailScreen/> */}
      {/* <BasketScreen/> */}
      <OrdersScreen/>
      <StatusBar
        hidden={false}
        translucent={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color:"black"
  },
});

export default App;
