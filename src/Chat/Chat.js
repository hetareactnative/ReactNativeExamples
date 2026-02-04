import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const Chat = ({chatData}) => {
  const flatListRef = useRef(null);


  console.log("chatData",chatData)
  const RenderBubbleLeft = ({item}) => {
  
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.profile}></View>
        <View style={[styles.messageBubble, styles.leftBubble]}>
          <Text style={styles.textStyle}>{item.text}</Text>
        </View>
      </View>
    );
  };
  const RenderBubbleRight = ({item}) => {
    return (
      <View style={[styles.messageBubble, styles.rightBubble]}>
        <Text style={styles.textStyle}>{item.text}</Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return item.isSender ? (
      <RenderBubbleLeft item={item} />
    ) : (
      <RenderBubbleRight item={item} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        inverted
        ref={flatListRef}
        data={chatData}
        renderItem={renderItem}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'white',
  },
  messageBubble: {
    padding: 10,
    margin: 5,
    maxWidth: '70%',
    backgroundColor: 'red',
  },
  leftBubble: {
    backgroundColor: '#F0F0F0',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  rightBubble: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  leftText: {
    color: '#000',
  },
  rightText: {
    color: '#000',
  },
  profile: {height: 20, width: 20, backgroundColor: 'red', borderRadius: 20},
});

export default Chat;
