import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function BasketItem({dish}) {
  return (
    <View>
      <View style={styles.item}>
        <View style={styles.namnum}>
        <View style={styles.numberItem}>
          <Text>1</Text>
        </View>
        <Text style={styles.itemName} numberOfLines={3}>{dish.name}</Text>
        </View>
        <Text style={styles.itemPrice}>$ {dish.price}</Text>
      </View>
      <View style={styles.horizontal}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        alignItems:'center',
    },
    itemPrice:{
        fontSize:17,
        fontWeight:'600',
        marginLeft:'auto',
    },
    itemName:{
        marginLeft:10,
        fontSize:17,
        fontWeight:'600',
    },
    numberItem:{
        backgroundColor:'lightgrey',
        paddingVertical:5,
        paddingHorizontal:10,
        marginVertical:20,
    },
    horizontal:{
        height:1,
        backgroundColor:'lightgrey',
        marginBottom:15,
    },
    namnum:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        overflow: 'hidden',
        marginLeft:10,
    },
})