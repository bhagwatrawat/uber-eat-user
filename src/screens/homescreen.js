  
import {View, Text, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import RestaurantItem from '../components/restaurantItem';
import {DataStore} from 'aws-amplify';
import {Restaurant} from '../models';
export default function Homescreen() {
  const [restaurants,setRestaurants] = useState([]);
  
  const fetchRestaurants = async () => {
    const results= await DataStore.query(Restaurant);
    setRestaurants(results);
  }
  useEffect(()=>{
    fetchRestaurants();
  },[])
  return (
    <FlatList
      data={restaurants}
      renderItem={({item}) =>  <RestaurantItem restaurant={item}/>}
      showsVerticalScrollIndicator={false}
    />
  )  
}
