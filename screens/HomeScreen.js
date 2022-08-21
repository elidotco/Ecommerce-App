import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const load = async () => {
    await AsyncStorage.getItem('isAgreementAccepted').then((result) => {
      console.log('RES: ', result);
      if (result == null) {
        navigation.navigate('Scroll');
        setLocalStoreData('isAgreementAccepted', 'true');
      } else {
        navigation.navigate('Preview');
        AsyncStorage.clear();
      }
    });
  };

  const setLocalStoreData = (key, value) => {
    AsyncStorage.setItem(key, value);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    setTimeout(
      () => load(),

      5000
    );
  }, []);

  return (
    <SafeAreaView>
      <View className="items-center relative ">
        <Image
          source={require('../homescreen.jpg')}
          className=" w-full h-full items-center bg-red-500"
        />

        <View className="items-center absolute h-100 bg-gray-800 w-full opacity-50 h-full transparent px-4 py-5 bottom-0">
          <View className="absolute bottom-0 w-full pb-10">
            <Text className="text-white text-center text-3xl font-bold">
              Welcome to
            </Text>
            <Text className="text-white  text-7xl pt-10 pb-10 font-bold">
              Shoea
            </Text>
            <View>
              <Text className="text-white text-center text-lg font-md ">
                The best sneakers & shoes e-commerce platform of the century for
                your fashion needs
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
