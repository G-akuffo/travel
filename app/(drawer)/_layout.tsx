import { Ionicons, MaterialIcons, Fontisto } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { HeaderButton } from '../../components/HeaderButton';

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="visa"
      options={{
        headerTitle: 'Visas',
        drawerLabel: 'Visas',
        drawerIcon: ({ size, color }) => <Fontisto name="passport-alt" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="tickets"
      options={{
        headerTitle: 'Tickets',
        drawerLabel: 'Tickets',
        drawerIcon: ({ size, color }) => <Ionicons name="airplane" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="guide"
      options={{
        headerTitle: 'Travel Guide',
        drawerLabel: 'Guide',
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="travel-explore" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="stays"
      options={{
        headerTitle: 'Stays',
        drawerLabel: 'Stays',
        drawerIcon: ({ size, color }) => <Ionicons name="bed-outline" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="(tabs)"
      options={{
        headerTitle: 'Tabs',
        drawerLabel: 'Tabs',
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
        headerRight: () => (
          <Link href="/modal" asChild>
            <HeaderButton />
          </Link>
        ),
      }}
    />
  </Drawer>
);

export default DrawerLayout;
