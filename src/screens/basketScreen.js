import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import React from 'react';
import BasketItem from '../components/basketItem';
import restaurants from '../../assets/data/restaurants.json';
export default function BasketScreen() {
    const restaurant= restaurants[0];
  return (
    <View style={styles.page}>
        <View >
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.yourItem}>Your Items</Text>
      <FlatList 
      data={restaurant.dishes}
      renderItem={({item})=>{
        return <BasketItem dish={item}/>
      }}/>
      <View style={styles.subtotal}>
        <Text style={styles.subtotalName}>Subtotal</Text>
        <Text style={styles.subtotalPrice}>$ 12</Text>
      </View>
      <View style={styles.subtotal}>
        <Text style={styles.subtotalName}>Total</Text>
        <Text style={styles.subtotalPrice}>$ 14</Text>
      </View>
      </View>
      <View>
          <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Next 74$</Text>
          </Pressable>
        </View> 
    </View>
  );
}
const styles = StyleSheet.create({
    page:{
        flex:1,
        width:'100%',
        padding:40,
        justifyContent:'space-between',
    },
   
    name:{
        fontSize:30,
        fontWeight:'600',
        marginBottom:10,
    },
    yourItem:{
        fontSize:20,
        fontWeight:'600',
    },
   
    subtotal:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:7,
    },
    subtotalName:{
        fontSize:17,
        fontWeight:'600',
    },
    subtotalPrice:{
        fontSize:17,
        fontWeight:'600',
    },
    button: {
        height: 70,
        backgroundColor:'black',
        alignItems: 'center',
        padding: 20,
      },
      buttonText:{
        color:'white',
        margin:'auto',
        fontSize:20,
      }, 
});
