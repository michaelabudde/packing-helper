import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';

import ClothingCard from '../../components/ClothingCard';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import * as db from '../../db.json';
import { getForecast, parseWeatherData } from '../../utils/weatherApi';
import * as weather from '../../weather.json';

export default function TabThreeScreen() {
  interface Item {
    name: string;
    imageUrl: string;
    weather: string;
  }

  interface WeatherData {
    temperature: {
      F: number;
    };
    // Add any other properties you need
  }

  const [cards, setCards] = useState<Item[]>([]);
  const [temperature, setTemperature] = useState('');
  const [latitude, setLatitude] = useState(50);
  const [longitude, setLongitude] = useState(-40);
  const fetchData = async () => {
    try {
      const weatherData: WeatherData = await getForecast(latitude, longitude);
      const parsedWeather = parseWeatherData(weatherData);
      console.log(parsedWeather);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  function filterTemp(temp: number) {
    if (temp >= 86) {
      return 'hot';
    } else if (temp >= 66 && temp <= 85) {
      return 'warm';
    } else if (temp <= 65) {
      return 'cold';
    }
  }
  const testResponse = weather;
  useEffect(() => {
    setTemperature(weather.list[0].temp.day);
    const tempString = filterTemp(temperature);
    const filteredCards: Item[] = db.items.filter(
      (item) => item.weather === tempString,
    );
    setCards([...filteredCards]);
    console.log('this is the temp');
    console.log(temperature);
    fetchData();
  }, []);

  console.log('here are the hot cards');
  console.log(cards);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Packing List</Text>
      <Text style={styles.normalText}>Get ready for your trip</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.cardContainer}>
        {cards.map((card, index) => {
          return <ClothingCard key={index} item={card} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2E9',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'JosefinSans-Bold',
    color: '#61A3BA',
    fontSize: 20,
  },
  normalText: {
    fontFamily: 'OpenSans-Regular',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  cardContainer: {
    display: 'flex',
    width: '100%',
    gap: 5,
    backgroundColor: 'transparent',
  },
});
