import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import restaurants from '../../assets/data/restaurants.json'
import orders from '../../assets/data/orders.json'
import OrderItem from '../components/orderItem'
export default function OrderDetailScreen() {
    const order = orders[0];
    const restaurant= restaurants[0];
    const Header=()=>{
        return (
            <View style={styles.header}>
        <Text style={styles.order}>Order</Text>
        <Image style={styles.image} source={{uri:order.Restaurant.image}}/>
        <View style={{paddingHorizontal:10}}>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <View style={styles.orderDate}>
        <Text style={styles.status}>{order.status}  &#8226; </Text>
        <Text style={styles.updatedAt}>{order.updatedAt}</Text>
        </View>
        <Text style={styles.yourOrder}>Your Order</Text>
        </View>
      </View>
        )
    }
  return (
    <View style={styles.page}>
      
      <FlatList
      ListHeaderComponent={Header}
      data={restaurant.dishes}
      renderItem={({item})=>{
        return <OrderItem dish={item}/>
      }}/>
    </View>
  )
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical:40, 
    },
    order:{
        fontSize:20,
        fontWeight:"900",
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:10,
    },
    image:{
        width: "100%",
        aspectRatio:6/4,
    },
    name:{
        fontSize:25,
        fontWeight:"900",
        marginVertical:10,
    },
    orderDate:{
        flexDirection:"row",

    },
    status:{
        fontSize:15,
        color:"grey",
    },
    updatedAt:{
        fontSize:15,
        color:"grey",
    },
    yourOrder:{
        fontSize:30,
        fontWeight:"900",
        marginVertical:15,
    },
})