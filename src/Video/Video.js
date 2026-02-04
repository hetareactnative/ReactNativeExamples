import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';

const Video = () => {
  const scrollViewRef = useRef(null);
  const view1Ref = useRef(null);
  const view2Ref = useRef(null);

  const [focusedView, setFocusedView] = useState(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({y: view1Ref.current.offsetTop});
    }
  }, []);

  const handleScroll = event => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
    const contentHeight = event.nativeEvent.contentSize.height;
    let view1Top;
    if (view1Ref.current) {
      view1Ref.current.measure((x, y, width, height, pageX, pageY) => {
        view1Top = pageY ? pageY : 0;
        if (pageY - Dimensions.get('window').height + 25 < 0) {
          if (
            pageY - Dimensions.get('window').height + 25 <
            Number(-(scrollViewHeight + 20))
          ) {
            console.log('Unfocusseeedddddddd');
          } else {
            console.log(
              'View Focused',
              pageY - Dimensions.get('window').height + 25,
              Number(-(scrollViewHeight + 20)),
            );
          }
        }
      });
    }
  };
  const handleLayout = event => {
    const {width, height} = event.nativeEvent.layout;
    console.log({width, height});
  };

  return (
    <ScrollView ref={scrollViewRef} onScroll={handleScroll}>
      {[1, 2, 3, 4, 5].map(item => {
        return (
          <View style={{height: 200}}>
            <Text>Video</Text>
          </View>
        );
      })}
      <View
        ref={view1Ref}
        onLayout={handleLayout}
        style={{backgroundColor: 'red'}}>
        <Text
          style={{
            backgroundColor:
              focusedView === 'view1' ? 'lightblue' : 'transparent',
          }}>
          Component 1
        </Text>
      </View>

      <View ref={view2Ref} onLayout={() => {}}>
        <Text
          style={{
            backgroundColor:
              focusedView === 'view2' ? 'lightblue' : 'transparent',
          }}>
          Component 2
        </Text>
      </View>
      {[1, 2, 3, 4, 5].map(item => {
        return (
          <View style={{height: 200}}>
            <Text>Video</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Video;

const styles = StyleSheet.create({});