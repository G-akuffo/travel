import React from 'react';
import { View, Text } from 'react-native';

export default function HeaderText() {
  return (
    <View className="items-center">
      <View>
        <Text className="mt-10 text-2xl">With you, we can</Text>
      </View>
      <View>
        <Text className="my-3 text-5xl font-extrabold">Revolutionize</Text>
      </View>
      <View>
        <Text className="text-2xl font-semibold uppercase">Travel Experiences</Text>
      </View>
    </View>
  );
}
