import { Stack } from 'expo-router';
import { Button, ImageBackground, View } from 'react-native';

import { Container } from '~/components/Container';

export default function Visa() {
  return (
    <>
      <Stack.Screen options={{ title: 'Visa' }} />
      <Container>
        <View className="bg-white">
          <View className="mx-10 mt-20 h-96 items-center rounded-2xl bg-slate-800 shadow-md">
            <ImageBackground
              source={require('~/assets/embassy.jpg')}
              className="h-full w-full rounded-lg"
            />
            <View className="absolute mt-72 w-1/2 rounded-lg bg-sky-300 px-4 py-2 shadow-lg">
              <Button title="Get Visa" />
            </View>
          </View>
        </View>
      </Container>
    </>
  );
}
