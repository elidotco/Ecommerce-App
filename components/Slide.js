import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';

const Slide = ({ item }) => {
  const windowDimensions = useWindowDimensions();

  return (
    <View style={{ width }}>
      <Image source={item.image} className="w-full " />

      <View>
        <Text>{item.des}</Text>
      </View>
    </View>
  );
};

export default Slide;
