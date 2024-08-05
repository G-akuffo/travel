import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ButtonDiv() {
  return (
    <>
      <View className="mx-5 mt-10 rounded-2xl bg-cyan-200 p-6">
        <Text className="text-5xl font-semibold">Get Canada {'\n'}Work Visa</Text>
        <Text>
          Imagine yourself exploring the stunning landscapes of Canada, from vibrant city scapes of
          Torornto to the breathtaking Rocky Mountains. Thriller travels is your gateway to Canada
        </Text>
        <View className="mt-20 rounded-lg bg-slate-100 p-3">
          <Button title="Apply to Canada" onPress={() => alert('Apply to Canada Button Pressed')} />
        </View>
      </View>
    </>
  );
}
