import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    tab: {
      marginRight: 15,
      opacity: 0.5,
    },
    pressed: {
      opacity: 1,
    },
  });

  const setColor = (isFocused: boolean) => {
    if (isFocused) return '#61A3BA';
    else return '#A2C579';
  };

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
        },
        tabBarLabelStyle: {
          fontFamily: 'OpenSans-Regular',
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarInactiveTintColor: '#A2C579',
          tabBarActiveTintColor: '#61A3BA',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" color={setColor(focused)} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].tabIconDefault}
                    style={pressed ? styles.tab : styles.pressed}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          tabBarInactiveTintColor: '#A2C579',
          tabBarActiveTintColor: '#61A3BA',
          title: 'Trip Form',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="suitcase" color={setColor(focused)} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          tabBarInactiveTintColor: '#A2C579',
          tabBarActiveTintColor: '#61A3BA',
          title: 'Packing List',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="list" color={setColor(focused)} />
          ),
        }}
      />
    </Tabs>
  );
}
