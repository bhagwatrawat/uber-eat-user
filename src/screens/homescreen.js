  
import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Data from '../../assets/data/restaurants.json';
import RestaurantItem from '../components/restaurantItem';
export default function Homescreen() {
  return (
    <FlatList
      data={Data}
      renderItem={({item}) =>  <RestaurantItem restaurant={item}/>}
      showsVerticalScrollIndicator={false}
    />
  )  
}
