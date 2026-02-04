import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import { color } from '../utils/color';

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Button
          title={'GorhomSheet'}
          onPress={() => navigation.navigate('GorhomSheet')}
        />
        <Button
          title={'NormalTextAnimation'}
          onPress={() => navigation.navigate('NormalTextAnimation')}
        />
        <Button
          title={'Html Txt Animation'}
          onPress={() => navigation.navigate('HtmlTxtAnimation')}
        />
        <Button
          title={'Stagger List'}
          onPress={() => navigation.navigate('StaggerList')}
        />
        <Button
          title={'Different Swipper'}
          onPress={() => navigation.navigate('Swiper')}
        />
        <Button
          title={'OTPTextInput'}
          onPress={() => navigation.navigate('OTPTextInput')}
        />
        <Button
          title={'Calander'}
          onPress={() => navigation.navigate('Calander')}
        />
        <Button
          title={'DateTimePicker'}
          onPress={() => navigation.navigate('DateTimePicker')}
        />

        <Button title={'Chat'} onPress={() => navigation.navigate('Chat')} />
        <Button
          title={'Swipe to delete'}
          onPress={() => navigation.navigate('SwiperList')}
        />
        <Button
          title={'Play Sound'}
          onPress={() => {
            navigation.navigate('PlaySound');
          }}
        />
        <Button
          title={'ToastNotification'}
          onPress={() => {
            navigation.navigate('ToastNotification');
          }}
        />

        <Button
          title={'Check if component is focused'}
          onPress={() => {
            navigation.navigate('Video');
          }}
        />
        <Button
          title={'Gifted Chat'}
          onPress={() => navigation.navigate('GiftedChat')}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.secondry,
  },
});
