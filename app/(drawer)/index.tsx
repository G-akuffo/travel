import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';

import ButtonDiv from '~/components/ButtonDiv';
import { Container } from '~/components/Container';
import HeaderText from '~/components/HeaderText';
import TextAndRowItem from '~/components/TextAndRowItem';

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="items-center">
            <HeaderText />
            <TextAndRowItem />
            <ButtonDiv />
          </View>
        </ScrollView>
      </Container>
    </View>
  );
}
