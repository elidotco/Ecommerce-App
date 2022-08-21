import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';
import data from '../data/data';
import Slide from './Slide';

const Slider = () => {
  const [veiwIndex, setVeiwIndex] = React.useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const veic = useRef(({ vi }) => {
    setVeiwIndex(vi[0].index);
  }).current;
  return (
    <View>
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({ items }) => <Slide item={items} />}
      />
    </View>
  );
};

export default Slider;
