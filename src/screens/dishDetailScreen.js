import { View, Text, StyleSheet, Button, Pressable, ActivityIndicator } from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Dish } from '../models';
import { DataStore } from 'aws-amplify';
export default function DishDetailScreen() {
  
  const [quantity, setQuantity] = useState(1);
  const navigation= useNavigation();
  const route=useRoute();
  const id= route.params.id;
  const [dish,setDish] = useState(null);
  useEffect(()=>{
    DataStore.query(Dish,id).then(setDish);
  },[])
  const onPress = () => {
    navigation.navigate('BasketScreen');
  }
  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  if(!dish){
    return ( 
      <ActivityIndicator style={{flex:1,justifyContent: 'center',alignItems:'center'}}/>
    )
  }
  return (
    <View style={styles.page}>
      <View style={styles.contain}>
        <View>
          <Text style={styles.name}>{dish.name}</Text>
          <Text style={styles.description}>{dish.description}</Text>
          <View style={styles.horizontal}></View>
          <View style={styles.icons}>
            <FontAwesome5 name="minus-circle" size={50} onPress={onMinus} />
            <Text style={styles.number}>{quantity}</Text>
            <FontAwesome5 name="plus-circle" size={50} onPress={onPlus} />
          </View>
        </View>
        <View>
          <Pressable onPress={onPress} style={styles.button} >
            <Text style={styles.buttonText}>Add {quantity} to basket  {+(dish.price*quantity).toFixed(2)} $</Text>
          </Pressable>
        </View> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
  },
  contain: {
    margin: 30,
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 30,
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    marginVertical: 20,
  },
  horizontal: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 35,
    fontWeight: '600',
    marginHorizontal: 20,
    marginVertical: 30,
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
