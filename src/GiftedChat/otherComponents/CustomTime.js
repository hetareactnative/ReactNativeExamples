import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CustomTime = props => {
  return (
    <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
      <Text style={{ color: 'red', fontSize: 12 }}>
        {props?.currentMessage?.createdAt.toLocaleTimeString()}
      </Text>
    </View>
  );
};

export default CustomTime;

const styles = StyleSheet.create({});
