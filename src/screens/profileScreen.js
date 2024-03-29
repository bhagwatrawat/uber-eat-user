import { Text, TextInput, StyleSheet, Button } from "react-native";
import React, {  useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Auth} from 'aws-amplify';
const Profile = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("0");
  const [lng, setLng] = useState("0");

  const onSave = () => {};
  const onSignOut=()=>{
    Auth.signOut();
  }
  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <Button onPress={onSave} title="Save" />
      <Button onPress={onSignOut} title="SignOut" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
});

export default Profile;
