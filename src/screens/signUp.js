import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextInput from '../components/authentication/TextInput';
import Button from '../components/authentication/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
const SignUp = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E9E9E5',
      }}>
        <View style={styles.container}>
      <View style={styles.inputItem}>
        <AntDesign style={styles.icon} name="user" size={30} color="grey" />
        <TextInput
          placeholder="Username"
          autocapitalize="none"
          secureTextEntry={false}
          value={user}
          setValue={setUser}
        />
      </View>
      <View style={styles.inputItem}>
        <Fontisto style={styles.icon} name="email" size={28} color="grey" />
        <TextInput
          placeholder="Email"
          autocapitalize="none"
          secureTextEntry={false}
          value={email}
          setValue={setEmail}
        />
      </View>
      <View style={styles.inputItem}>
        <MaterialIcons
          style={styles.icon}
          name="lock-outline"
          size={30}
          color="grey"
         
        />
        <TextInput
          placeholder="Password"
          autocapitalize="none"
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
      </View>
      <View style={styles.inputItem}>
        <MaterialIcons
          style={styles.icon}
          name="lock-outline"
          size={30}
          color="grey"
         
        />
        <TextInput
          placeholder="Password"
          autocapitalize="none"
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
      </View>
      
      <Pressable style={styles.button}>
        <Text style={styles.text}>SignUp</Text>
      </Pressable>

      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  inputItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  container: {
    width: '86%',
  },
  button: {
    color: 'white',
    backgroundColor: '#3073EF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  icon: {
    marginHorizontal: 5,
    width:'10%',
  },
});
