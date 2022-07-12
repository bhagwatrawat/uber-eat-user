import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
export default function Order({order}) {
  const navigation= useNavigation();
  const onPress=()=>{
    navigation.navigate('OrderDetailScreen',{id:order.id});
  }
  return (
    <Pressable onPress={onPress} onPressstyle={styles.page}>
        <View style={styles.order}>
      <Image style={styles.image} source={{uri:order.Restaurant.image}}/>
      <View style={{flex:1}}>
        <Text style={styles.orderName} numberOfLines={2}>{order.Restaurant.name}</Text>
        <Text style={styles.orderPrice}>Items $10.00</Text>
        <Text style={styles.orderDate}>{order.updatedAt} {order.status}</Text>
      </View>
      </View>
      <View style={styles.horizontal}></View>
    </Pressable>
  )
}
const styles = StyleSheet.create({

    image:{
        width: 100,
        aspectRatio:1,
        marginRight:20,
    },
    order:{
        flexDirection:"row",
        alignItems:"center",
    },
   
    orderName:{
        fontSize:20,
        fontWeight:"900",
    },
    orderPrice:{
        fontSize:15,
        marginVertical:5,
        color:"grey",
    },
    orderDate:{
        fontSize:14,
    },
    horizontal:{
        height:1,
        backgroundColor:"lightgrey",
        marginVertical:20,
    },
})