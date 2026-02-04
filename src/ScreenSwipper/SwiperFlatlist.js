import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {color} from '../utils/color';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
const windowWidth = Dimensions.get('window').width;

const SwiperFlatlist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  });
  const viewabilityConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 75,
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item}</Text>
      </View>
    );
  };
  const pagination = () => {
    return (
      <View style={styles.pagination}>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <View
            key={index}
            style={[
              index == currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{height: 100}}>
        <SwiperFlatList
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          index={0}
          autoplayLoop
          autoplay
          autoplayDelay={2}
          autoplayInterval={4000}
          shouldCapture={() => false}
          onChangeIndex={({index}) => setCurrentIndex(index)}
          showPagination
          data={[1, 2, 3, 4, 5]}
          renderItem={renderItem}
          autoplayLoopKeepAnimation
          PaginationComponent={pagination}
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={handleViewableItemsChanged.current}
          performanceMode={true}
        />
      </View>
    </View>
  );
};

export default SwiperFlatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondry,
    justifyContent:'center'
  },
  itemContainer: {
    backgroundColor: color.primary,
    width: windowWidth - 20, //sub 10+10 marginHorizontal
    marginHorizontal: 10,
    alignItems:'center',
    justifyContent:'center',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',
  },
  activeDot: {
    backgroundColor: color.primary,
    height: 10,
    width: 10,
    marginHorizontal: 2,
    borderRadius: 3,
    opacity: 0.8,
  },
  inactiveDot: {
    backgroundColor: color.black,
    height: 10,
    width: 10,
    marginHorizontal: 2,
    borderRadius: 3,
    opacity: 0.4,
  },
  title: {
    color: color.white,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 14,
    marginVertical: 10,
  },
});
