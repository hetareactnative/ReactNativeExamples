import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,SafeAreaView,
  Dimensions,
} from 'react-native';
import Chat from './Chat';
import ChatInput from './ChatInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRef} from 'react';
const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Message 1',
      isSender: false,
    },
    {
      id: 2,
      text: 'Message 2',
      isSender: true,
    },
    {
      id: 3,
      text: 'Message 3',
      isSender: false,
    },
    {
      id: 14,
      text: 'Message 1',
      isSender: false,
    },
    {
      id: 25,
      text: 'Message 2',
      isSender: true,
    },
    {
      id: 36,
      text: 'Message 3',
      isSender: false,
    },
    {
      id: 17,
      text: 'Message 1',
      isSender: false,
    },
    {
      id: 28,
      text: 'Message 2',
      isSender: true,
    },
    {
      id: 39,
      text: 'Message 3',
      isSender: false,
    },
    {
      id: 10,
      text: 'Message 1',
      isSender: false,
    },
    {
      id: 20,
      text: 'Message 2',
      isSender: true,
    },
    {
      id: 36,
      text: 'Message 3',
      isSender: false,
    },
    {
      id: 100,
      text: 'Message 1',
      isSender: false,
    },
    {
      id: 200,
      text: 'Message 2',
      isSender: true,
    },
    {
      id: 300,
      text: 'Message 3',
      isSender: false,
    },
    {
      id: 101,
      text: 'Message 1',
      isSender: false,
    },
    {
      id: 201,
      text: 'Message 2',
      isSender: true,
    },
    {
      id: 301,
      text: 'Message 3',
      isSender: false,
    },
    {
      id: 102,
      text: 'Message 1',
      isSender: false,
    },
    {
      id: 202,
      text: 'Message 2',
      isSender: true,
    },
    {
      id: 302,
      text: 'Message 3',
      isSender: false,
    },
  ]);
  const [message, setMessage] = useState('');

  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      timestamp: new Date(),
      user: {id: 1, name: 'User'},
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputText('');
  };
  const scrollViewRef = useRef();
  const handleScrollToInput = reactNode => {
    // Use the scroll view ref to scroll to the TextInput
    scrollViewRef.current.scrollToFocusedInput(reactNode);
  };
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        ref={ref => (scrollViewRef.current = ref)}
        extraScrollHeight={50}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            height: Dimensions.get('window').height - 170,
          }}>
          <Chat chatData={messages} />
        </View>

        <ChatInput handleScrollToInput={handleScrollToInput} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff', // Set a background color to visualize the container size
  },
  messageContainer: {
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 8,
  },
  sendButton: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
