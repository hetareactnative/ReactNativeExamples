import React, {useState} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';

const SwiperList = () => {
  const [listData, setListData] = useState(
    Array(10)
      .fill('')
      .map((_, i) => ({key: `${i}`, text: `Item #${i}`})),
  );

  const deleteRow = rowKey => {
    const newData = listData.filter(item => item.key !== rowKey);
    setListData(newData);
  };

  const onSwipeValueChange = swipeData => {
    const {key, value} = swipeData;

    // Set the left and right swipe thresholds based on your requirement
    const leftThreshold = 100 - Dimensions.get('window').width;
    const rightThreshold = 100;

    if (value < leftThreshold) {
      deleteRow(key);
    }
  };

  const renderItem = (data, rowMap) => (
    <View style={styles.rowFront}>
      <Text>{data.item.text}</Text>
    </View>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      {/* Right side (Delete) */}
      <TouchableOpacity
        style={[styles.infoButton, styles.leftHiddenItem]}
        onPress={() => console.log(`Info for ${data.item.text}`)}>
        <Text style={styles.infoText}>Info</Text>
      </TouchableOpacity>

      {/* Left side (Info) */}

      <TouchableOpacity
        style={[styles.deleteButton, styles.rightHiddenItem]}
        onPress={() => deleteRow(data.item.key)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-75}
        disableLeftSwipe={false}
        disableRightSwipe={false}
        onSwipeValueChange={onSwipeValueChange}
        useNativeDriver={false}
      />
    </View>
  );
};

export default SwiperList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});
