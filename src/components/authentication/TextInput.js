import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'


const textInput = ({placeholder,autocapitalize,secureTextEntry,value,setValue}) => {
  return (
    <View>
     <TextInput 
      value={value}
      onChangeText={setValue}
      style={styles.textInput}
      placeholder={placeholder}
      autoCapitalize={autocapitalize}
      secureTextEntry={secureTextEntry}/>
    </View>
  )
}

export default textInput

const styles = StyleSheet.create({
    textInput: {
        width: 300,
        height: 38,
        paddingHorizontal:10,
    },
})