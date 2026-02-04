import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageMessage = (props) => {
    const { currentMessage } = props;
    return (
      <View>
        <Image
          source={{ uri: currentMessage.image }}
          style={{ width: 100, height: 100,resizeMode:'contain' }}
        />
      </View>
    );
}

export default ImageMessage

const styles = StyleSheet.create({})