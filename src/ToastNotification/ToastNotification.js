import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import Button from '../components/Button';
import { color } from '../utils/color';

const ToastNotification = () => {
  const toast = useToast();
  const toast1 = useToast();

  const showToast = () => {
    const id = toast.show('Hello World', {
      type: 'success',
      placement: 'bottom',
      duration: 4000,
      offset: 30,
      animationType: 'zoom-in',
    });
  };
  const showToast1 = () => {
    toast1.show('Hello World', {
      type: 'warning',
      placement: 'top',
      duration: 4000,
      offset: 30,
      animationType: 'zoom-in',
    });
  };

  return (
    <View style={styles.container}>
      <Text>ToastNotification</Text>
      <Button
        title={'Toast'}
        onPress={() => {
          showToast();
        }}
      />
      <Button
        title={'Top Toast'}
        onPress={() => {
          showToast1();
        }}
      />
    </View>
  );
};

export default ToastNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.secondry,
  },
});
