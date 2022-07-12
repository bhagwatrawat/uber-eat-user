import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function RestaurantItem({restaurant}) {
  return (
    <View style={styles.restaurantContainer}>
        <Image style={styles.foodImage} source={{uri:restaurant.image}}/>
        <View style={styles.foodInfo}>
          <View>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} min</Text>
          </View>
          <Text style={styles.rating}>{restaurant.rating}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    
    restaurantContainer:{
      width: '100%',
      marginBottom: 20,
    },
    foodImage:{
     width: '100%',
      aspectRatio: 6/4,

    },
    foodInfo:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin:10,
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom:10,
    },
    subtitle:{
      fontSize: 15,
      color: 'grey',
    },
    rating:{
      fontSize: 17,
      fontWeight: 'bold',
      backgroundColor: 'lightgrey',
      borderRadius: 25,
      padding: 10,
      width:45,
        textAlign: 'center',
    },
  });
  