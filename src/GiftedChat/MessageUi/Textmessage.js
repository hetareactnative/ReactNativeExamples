import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Textmessage = props => {
  const {currentMessage} = props;
  console.log("currentMessage.user._id ",currentMessage?.user?._id, currentMessage?._id==1 )
  const RenderBubbleLeft = ({item}) => {
    console.log("right")
    console.log("right",item)
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.profile}></View>
        <View style={[styles.messageBubble, styles.leftBubble]}>
          <Text style={styles.textStyle}>{item}</Text>
        </View>
      </View>
    );
  };
  const RenderBubbleRight = ({item}) => {
    return (
      <View style={[styles.messageBubble, styles.rightBubble]}>
        <Text style={styles.textStyle}>{item}</Text>
      </View>
    );
  };
  return (
   <>{
    currentMessage?.user?._id==1?<RenderBubbleLeft item={currentMessage?.text}/>:<RenderBubbleRight item={currentMessage?.text}/>
   }</>
  );
};

export default Textmessage;

const styles = StyleSheet.create({});
