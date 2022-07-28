import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'


const textInput = () => {
  return (
    <View>
     <TextInput 
     style={styles.textInput}
     placeholder="email"
      autoCapitalize='none'
    //   autoCompleteType='email'
    //   keyboardType='email-address'
      keyboardAppearance='dark'
      returnKeyType='next'
      returnKeyLabel='next'
      secureTextEntry/>
    </View>
  )
}

export default textInput

const styles = StyleSheet.create({
    textInput: {
        width: 300,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal:10,
    },
})