import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Homescreen from '../screens/homescreen';
import DetailScreen from '../screens/detailscreen';
import DishDetailScreen from '../screens/dishDetailScreen';
import BasketScreen from '../screens/basketScreen';
import OrdersScreen from '../screens/ordersScreen';
import OrderDetailScreen from '../screens/orderDetailScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const HomeStack=createNativeStackNavigator();
const OrdersStack=createNativeStackNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{backgroundColor:'white'}}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="home" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="clipboard-list" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Homescreen}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="user-alt" size={20} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const HomeStackNavigator=()=>{
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={Homescreen} options={{headerShown: false}}/>
            <HomeStack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown: false}}/>
            <HomeStack.Screen name="DishDetailScreen" component={DishDetailScreen} options={{headerShown: false}}/>
            <HomeStack.Screen name="BasketScreen" component={BasketScreen} options={{headerShown: false}}/>
        </HomeStack.Navigator>
    )
}
const OrdersStackNavigator=()=>{
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="OrdersScreen" component={OrdersScreen} options={{headerShown: false}}/>
            <OrdersStack.Screen name="OrderDetailScreen" component={OrderDetailScreen} options={{headerShown: false}}/>
        </OrdersStack.Navigator>
    )
}

export default RootNavigator;
