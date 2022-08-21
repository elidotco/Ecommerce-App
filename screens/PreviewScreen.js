import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, View } from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';

const PreviewScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    setTimeout(
      () =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        }),
      5000
    );
  }, []);

  const nav = () => {
    navigation.navigate('Home');
  };
  return (
    <View className="w-full h-full px-8 bg-gray-700 items-center justify-center relative">
      <Image source={require('../logo.png')} className="px-5 w-full h-14" />
      <View className=" items-center absolute bottom-20 left-20 px-20">
        <ProgressCircle
          width={230}
          color="#ffffff"
          animated={true}
          indeterminate={true}
        />
      </View>
    </View>
  );
};

export default PreviewScreen;
