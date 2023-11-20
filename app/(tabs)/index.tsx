import * as Font from 'expo-font';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'JosefinSans-Regular': require('../../assets/fonts/JosefinSans-Regular.ttf'),
        'JosefinSans-SemiBold': require('../../assets/fonts/JosefinSans-SemiBold.ttf'),
        'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Packing Helper!</Text>
      <Text style={styles.body}>
        {' '}
        Simply enter your trip details and get a packing list generated based on
        the weather forecast.
      </Text>
      <Button mode="contained">Click here to Start!</Button>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 30,
  },
  body: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
