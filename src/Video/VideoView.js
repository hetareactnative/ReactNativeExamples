import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';

const VideoView = () => {
    useFocusEffect(
        React.useCallback(() => {
          // Code to run when the screen is focused
          console.log('Screen is focused');
          // Place your video play logic here
    
          return () => {
            // Code to run when the screen is unfocused
            console.log('Screen is unfocused');
            // Place your video pause logic here
          };
        }, [])
      );
    
  return (
    <View>
      <Text>VideoView</Text>
    </View>
  )
}

export default VideoView

const styles = StyleSheet.create({})