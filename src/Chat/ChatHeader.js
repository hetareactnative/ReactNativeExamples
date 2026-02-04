import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ChatHeader = ({username}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text>B</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.backButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  username: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChatHeader;
