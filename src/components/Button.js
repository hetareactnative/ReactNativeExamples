import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../utils/color';

export default function Button({title, onPress}) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => onPress()}>
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: color.primary,
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
  },
  btnTxt: {
    color: color.white,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
