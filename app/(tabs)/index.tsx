import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';

//import CustomFonts from '../../components/loadFonts.js'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
//import { customFonts } from '../../components/loadFonts';

export default function TabOneScreen() {
  //const [fontsLoaded] = useFonts(customFonts);

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
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 30,
    color: '#61A3BA',
  },
  subtitle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
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
  circle: {
    width: 300,
    height: 300,
    backgroundColor: '#D2DE32',
    borderRadius: 150,
    opacity: 0.5,
  },
  topCircle: {
    position: 'absolute',
    top: -150,
  },
  leftCircle: {
    width: 250,
    height: 250,
    position: 'absolute',
    left: -120,
    bottom: 80,
  },
  bottomCircle: {
    position: 'absolute',
    width: 315,
    height: 315,
    bottom: -50,
    right: -120,
    borderRadius: 315 / 2,
  },
  imgBg: {
    position: 'absolute',
    width: 300,
    height: 250,
    bottom: -15,
    left: -35,
    opacity: 0.25,
  },
});
