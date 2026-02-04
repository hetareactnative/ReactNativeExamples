import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CustomDate = props => {
  return (
    <View style={{ alignItems: 'center', marginTop: 10 }}>
      <Text style={{ color: 'gray', fontSize: 12 }}>
        {props?.currentMessage?.createdAt.toDateString()}
      </Text>
    </View>
  );
};

export default CustomDate;

const styles = StyleSheet.create({});
