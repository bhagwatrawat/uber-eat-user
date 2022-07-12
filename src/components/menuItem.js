import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
export default function MenuItem({dish}) {
    const navigation=useNavigation();
    const onPress=()=>{
        navigation.navigate('DishDetailScreen',{id:dish.id});
    }
  return (
    <Pressable onPress={onPress}style={styles.menuContainer}>
      <View style={styles.menuifo}>
        <View style={{flex: 1, paddingRight: 10}}>
          <Text style={styles.itemName}>{dish.name}</Text>
          <Text style={styles.itemdescription} numberOfLines={4}>
            {dish.description}
          </Text>
          <Text style={styles.price}>${dish.price}</Text>
        </View>

        <View>
          {dish.image && (
            <Image style={styles.image} source={{uri: dish.image}} />
          )}
        </View>
      </View>
      <View style={styles.horizontal}></View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  menuContainer: {
    margin: 15,
  },
  menuifo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
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
  image: {
    height: 75,
    aspectRatio: 1,
  },
});
