import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Sound from 'react-native-sound';
import {color} from '../utils/color';

const PlaySound = () => {

  const remoteUrl = 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/mixkit-select-click-1109.wav?v=1701930988';
  
  const sound = new Sound(remoteUrl, null, (error) => {
    if (error) {
      console.log('Error loading sound from URL: ', error);
    }
  });
  const playSoundFromUrl = async () => {

  // Wait for the sound to be loaded before playing
  sound.play((success) => {
    if (success) {
      console.log('Sound played successfully');
    } else {
      console.log('Error playing sound');
    }
  });
};
  return (
    <View style={styles.container}>
      <Button
        title={'Play Sound'}
        onPress={() => {playSoundFromUrl()}}
      />
    </View>
  )
}

export default PlaySound

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.secondry,
      },
})