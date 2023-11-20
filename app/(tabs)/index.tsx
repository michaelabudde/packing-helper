import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';

//import CustomFonts from '../../components/loadFonts.js'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
//import { customFonts } from '../../components/loadFonts';

export default function TabOneScreen() {
  //const [fontsLoaded] = useFonts(customFonts);

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
    marginTop: 30,
    backgroundColor: '#A2C579',
    color: '#FFFFDD',
    fontFamily: 'OpenSans-Regular',
  },
});
