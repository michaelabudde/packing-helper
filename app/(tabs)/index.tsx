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
      <View style={[styles.circle, styles.topCircle]} />
      <View style={[styles.circle, styles.leftCircle]} />
      <View style={[styles.circle, styles.bottomCircle]} />
      <Image
        source={require('../../assets/images/briefcase.png')}
        style={styles.imgBg}
      />

      <Text style={styles.subtitle}>Welcome! to</Text>
      <Text style={styles.title}> Packing Helper</Text>

      <Link href="/(tabs)/form">
        <Button
          textColor="#FFFFDD"
          style={styles.button}
          labelStyle={{ fontFamily: 'OpenSans-Regular' }}
        >
          Start Packing
        </Button>
      </Link>
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
  button: {
    backgroundColor: '#A2C579',
    color: '#FFFFDD',
    fontFamily: 'OpenSans-Regular',
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
