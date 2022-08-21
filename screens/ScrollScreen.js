import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import SimplePaginationDot from '../components/Pgdot';
const { width: windowWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
    height: 1100,
    position: 'absolute',
  },
});

const ScrollScreen = () => {
  const navigation = useNavigation();
  const [slidIndex, setSlideIndex] = useState(0);

  const carouselRef = useRef(null);
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        horizontal
        Onpress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
        className="w-50 bg-red-500
        w-full h-full  "
      >
        <Text className="w-50 bg-red-500 font-bold text-3xl relative top-20">
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  function handleCarouselScrollEnd(item, index) {
    setSlideIndex(index);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View className="items-center flex-1 w-full h-full justify-center bg-gray-500">
        {/* <Text
          className="text-3xl
        text-white"
        >
          hello screens
        </Text> */}

        <Carousel
          ref={carouselRef}
          data={Array(3).fill(0)}
          renderItem={renderItem}
          style={styles.carousel}
          itemWidth={windowWidth}
          containerWidth={windowWidth}
          separatorWidth={0}
          onScrollEnd={handleCarouselScrollEnd}
        />

        <SimplePaginationDot currentIndex={slidIndex} length={3} />
      </View>
    </SafeAreaView>
  );
};

export default ScrollScreen;
