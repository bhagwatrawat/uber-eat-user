import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Order from '../components/order'
import Orders from '../../assets/data/orders.json'
export default function OrdersScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.yourOrders}>Your Orders</Text>
   <FlatList 
   data={Orders}
   renderItem={({item})=>{
        return <Order order={item}/>
   }}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 40,
        paddingHorizontal: 10,
    },
    yourOrders: {
        fontSize:30,
        fontWeight:"900",
        textAlign: "center",
        marginVertical:20,
    },
})