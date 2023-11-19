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
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.title}> to Packing Helper</Text>

      <Link href="/(tabs)/form">
        <Button textColor="#FFFFDD" style={styles.button}>
          Start Packing
        </Button>
      </Link>
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
  button: {
    marginTop: 10,
    backgroundColor: '#A2C579',
    color: '#FFFFDD',
    fontFamily: 'OpenSans-Regular',
  },
});
