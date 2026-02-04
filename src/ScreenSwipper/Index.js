import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { color } from '../utils/color';
import Button from '../components/Button';

const Index = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'Swiper Flatlist'}
        onPress={() => navigation.navigate('SwiperFlatlist')}
      />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.secondry,
  },
});
