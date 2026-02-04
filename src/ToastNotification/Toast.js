import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../utils/color'

const Toast = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>customize your toast message</Text>
    </View>
  )
}

export default Toast

const styles = StyleSheet.create({
  container:{
    backgroundColor:color.primary,
    padding:10,
    borderRadius:10
  },
  text:{
    color:color.white
  }
})