import { View, TextInput, TouchableOpacity, Text,StyleSheet } from 'react-native';
import React from 'react'

const CustomTextInput = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8 }}>
        {/* Your custom input components */}
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 8, paddingHorizontal: 8 }}
          placeholder="Type a message..."
          onChangeText={text => props.onInputTextChanged(text)}
          value={props.text}
        />
        <TouchableOpacity onPress={() => props.onSend({ text: props.text.trim() }, true)}>
          <Text style={{ color: 'blue', marginLeft: 8 }}>Send</Text>
        </TouchableOpacity>
      </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({})