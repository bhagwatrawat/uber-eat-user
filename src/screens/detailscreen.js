import {View, Text, StyleSheet, Image, FlatList, Alert, ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import MenuItem from '../components/menuItem';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import { Restaurant,Dish } from '../models';
export default function DetailScreen() {
  const [restaurant,setRestaurant] = useState(null);
  const [dishes,setDishes] = useState([]);
  const navigation= useNavigation();
  const DEFAULT_IMAGE="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

  const onPress=()=>{
    navigation.navigate('HomeScreen');
  }
  const route=useRoute();
  const id= route.params.id;
  useEffect(()=>{
    DataStore.query(Restaurant,id).then(setRestaurant);
    DataStore.query(Dish,(dish)=>dish.restaurantID("eq",id)).then(setDishes);
  },[]);
  const Header=()=>{
    return(
      <View>
      <Image
        style={styles.foodImage} 
        source={{
          uri: restaurant.image.startsWith('http')?restaurant.image:DEFAULT_IMAGE
        }}
      />
      <FontAwesome5 onPress={onPress} style={styles.backButton} name="arrow-left" size={20}  />
      <View>
        <View style={styles.foodInfo}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            $ {restaurant.deliveryFee} &#8226; {restaurant.rating}{' '}
          </Text>
        </View>
        <View style={styles.horizontal}></View>
      </View>
      </View>
    )
  }
  if(!restaurant){
    return ( 
      <ActivityIndicator style={{flex:1,justifyContent: 'center',alignItems:'center'}}/>
    )
  }
  return (
    <View style={styles.restaurantContainer}>
      
          <FlatList
            ListHeaderComponent={Header}
            data={dishes}
            renderItem={({item}) => <MenuItem dish={item} />}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator={false}
          />
        
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
  },
  foodImage: {
    width: '100%',
    aspectRatio: 6 / 3,
  },
  foodInfo: {
    margin: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: 'grey',
  },
  horizontal: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginTop: 20,
    marginBottom: 15,
  },
  menu: {
    fontSize: 20,
  },
  backButton: {
    position: 'absolute',
    top:30,
    left:10,
    color: 'black',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 999,
  }
});
