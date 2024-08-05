import React from 'react';
import { View, Text, Image } from 'react-native';

export default function TextAndRowItem() {
  return (
    <View>
      <View className="mx-5 mt-32">
        <Text className="mb-4 text-2xl font-semibold">Our Top Countries</Text>
        <Text className="text-base text-gray-500">
          Going somewhere to celebrate this season? {'\n'}Whether you're going home or going
          somewhere to roam, we've got the travel tools to get you to your destination
        </Text>
      </View>
      <View className="mt-7 flex-row">
        <Image source={require('~/assets/city.jpg')} className="mx-3 h-32 w-48 rounded-2xl" />
        <Image source={require('~/assets/eiffel.jpg')} className="mx-3 h-32 w-48 rounded-2xl" />
      </View>
      <View className="mt-7 flex-row">
        <Image source={require('~/assets/enclosure.jpg')} className="mx-3 h-32 w-48 rounded-2xl" />
        <Image
          source={require('~/assets/fve str hotel.jpg')}
          className="mx-3 h-32 w-48 rounded-2xl"
        />
      </View>
    </View>
  );
}
