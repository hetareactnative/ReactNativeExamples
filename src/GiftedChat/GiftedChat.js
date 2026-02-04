import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import ImageMessage from './MessageUi/ImageMessage';
import Textmessage from './MessageUi/Textmessage';
import AudioMessage from './MessageUi/AudioMessage';
import VideoMessage from './MessageUi/VideoMessage';
import CustomTextInput from './otherComponents/CustomTextInput';
import CustomDate from './otherComponents/CustomDate';
import CustomTime from './otherComponents/CustomTime';

const GiftedChatScreen = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
        {
            _id: 1,
            text: 'Message 1',
            createdAt: new Date(),
            image: 'https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png',
            user: {
              _id: 2,
              name: 'React Aative',
            },
          },
          {
            _id: 2,
            text: 'Message 2',
            createdAt: new Date(),
         
            user: {
              _id: 1,
              name: 'React Aative',
            },
          },
          {
            _id: 3,
            text: 'Message 3',
            createdAt: new Date(),
         
            user: {
              _id: 2,
              name: 'React Aative',
            },
          }
    ]);
  }, []);

  renderCustomAvatar = (props) => {
    const { currentMessage } = props;

    return (
     <View style={{height:20,width:20,backgroundColor:'pink'}}>
       <Text>A</Text>
     </View>
    );
  }

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <SafeAreaView style={{flex:1}}>
      <GiftedChat
        messages={messages}
        // renderMessageImage={ImageMessage}
        renderBubble={Textmessage}
        // renderMessageAudio={AudioMessage}
        // renderMessageVideo={VideoMessage}
        // renderInputToolbar={CustomTextInput}
        renderDay={CustomDate}
        // renderTime={CustomTime}
        renderAvatar={renderCustomAvatar}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
};

export default GiftedChatScreen;

const styles = StyleSheet.create({});
