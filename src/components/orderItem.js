import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function OrderItem({dish}) {
  return (
    <View style={styles.page}>
      <View style={styles.items}>
        <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
        <Text style={styles.number}>1</Text>
        <Text style={styles.name} numberOfLines={2}>{dish.name}</Text>
        </View>
        <Text style={styles.price}>${dish.price}</Text>
      </View>
      <View style={styles.horizontal}></View>
    </View>
  )
}
const styles = StyleSheet.create({
    page: {
        paddingHorizontal:20,
    },
    items:{
      flexDirection:'row',
        alignItems:'center',
        
    },
    number:{
        fontSize:14,
        fontWeight:"600",
        backgroundColor:'#f5f5f5',
        paddingVertical:5,
        paddingHorizontal:10,
    },
    name:{
        fontSize:17,
        fontWeight:"600",
        marginLeft:10,
        paddingRight:40,
    },
    price:{
        fontSize:17,
        marginLeft:10,
    },
    horizontal:{
        height:1,
        backgroundColor:"lightgrey",
        marginVertical:20,
    },
})