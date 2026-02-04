import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

const ChatInput = ({sendMessage, handleScrollToInput}) => {
  const [message, setMessage] = useState('');

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   extraScrollHeight={Platform.OS === 'ios' ? 20 : 0}>

    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputAndMicrophone}>
          <TextInput
            onFocus={event => handleScrollToInput(event.target)}
            multiline
            numberOfLines={2}
            placeholder={'Type something...'}
            style={styles.input}
            value={message}
            onChangeText={text => setMessage(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => sendMessage(message)}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // height:80,
    flex:1,
    alignItems:'center',
    backgroundColor:'red'
  },
  innerContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  inputAndMicrophone: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    flex: 3,
    marginRight: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: 'transparent',
    paddingLeft: 20,
    color: 'green',
    flex: 3,
    fontSize: 15,
    maxHeight: 50,
    alignSelf: 'center',
  },

  sendButton: {
    backgroundColor: 'skyblue',
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatInput;
