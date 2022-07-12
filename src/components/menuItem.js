import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function MenuItem({dish}) {
  return (
    <View style={styles.menuContainer}>
        <View style={styles.menuifo}>
        <View style={{flex:1,paddingRight:10}}>
        <Text style={styles.itemName}>{dish.name}</Text>
      <Text style={styles.itemdescription} numberOfLines={4}>{dish.description}</Text>
      <Text style={styles.price}>${dish.price}</Text>
      
        </View>
     
      <View>
           {dish.image &&( <Image style={styles.image} source={{uri:dish.image}}/>)} 
        </View>
        </View>
        <View style={styles.horizontal}></View>
    </View>
  )
} 
const styles = StyleSheet.create({
    menuContainer: {
        margin:15,
    },
    menuifo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:20,
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,

    },
    itemdescription: {
        fontSize: 15,
        color: 'grey',
        marginBottom: 5,
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    horizontal: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    },
    image:{
        height:75,
        aspectRatio:1,
    }
})