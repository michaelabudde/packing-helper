import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TextInput, Button } from 'react-native-paper';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startMode, setStartMode] = useState('date');
  const [endMode, setEndMode] = useState('date');
  const [startShow, setStartShow] = useState(false);
  const [endShow, setEndShow] = useState(false);
  const apiKey = 'AIzaSyCbwvqDKWCcpI5F0YYHtqvHWAnNTqkjyCA';

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const onChangeStart = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setStartShow(false);
    setStartDate(currentDate);
  };

  const showModeStart = (currentMode: any) => {
    setStartShow(true);
    setStartMode(currentMode);
  };

  const onChangeEnd = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setEndShow(false);
    setEndDate(currentDate);
  };

  const showModeEnd = (currentMode: any) => {
    setEndShow(true);
    setEndMode(currentMode);
  };

  const showDatepickerStart = () => {
    showModeStart('date');
  };

  const showDatepickerEnd = () => {
    showModeEnd('date');
  };

  const route = useRoute();
  const navigation = useNavigation();

  const generateList = (latitude, longitude) => {
    {
      navigation.navigate('list', { latitude, longitude });
    }
  };

  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>Enter Your Trip Details</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View>
        <Text style={styles.subtitle}>Where are you going:</Text>

        {/*<TextInput onChangeText={setLocation} value={location} />*/}
        <GooglePlacesAutocomplete
          styles={styles.textInput}
          placeholder="Type a place"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            {
              setLocation(data.description);
              setLatitude(details.geometry.location.lat);
              setLongitude(details.geometry.location.lng);
            }
          }}
          query={{ key: apiKey, language: 'en' }}
          fetchDetails
          onFail={(error) => console.log(error)}
          onNotFound={() => console.log('no results')}
        />
        <View style={styles.separator} />
      </View>
      <View>
        <Button
          style={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={showDatepickerStart}
        >
          Select Start Date
        </Button>
        <Text style={styles.text}>
          {startDate.toLocaleString('en-US', options)}
        </Text>
        {startShow && (
          <DateTimePicker
            testID="dateTimePicker"
            value={startDate}
            mode={startMode}
            is24Hour
            onChange={onChangeStart}
          />
        )}
      </View>

      <View>
        <Button
          style={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={showDatepickerEnd}
        >
          Select End Date
        </Button>
        <Text style={styles.text}>
          {endDate.toLocaleString('en-US', options)}
        </Text>
        {endShow && (
          <DateTimePicker
            testID="dateTimePicker"
            value={endDate}
            mode={endMode}
            is24Hour
            onChange={onChangeEnd}
          />
        )}
      </View>
      <View>
        <Link href="/(tabs)/list">
          <Button
            labelStyle={styles.filledButtonLabel}
            style={styles.filledButton}
            onPress={generateList(latitude, longitude)}
          >
            Make List
          </Button>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  transparentBg: {
    backgroundColor: 'transparent',
  },
  textInput: {
    backgroundColor: '#F2F2E9',
    borderRadius: 20,
    height: 200,
    marginTop: 30,
    marginBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 20,
    color: '#61A3BA',
  },
  subtitle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    padding: 5,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    padding: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '90%',
  },
  button: {
    borderColor: '#A2C579',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  buttonLabel: {
    fontFamily: 'OpenSans-SemiBold',
    color: '#A2C579',
  },
  filledButton: {
    backgroundColor: '#A2C579',
    marginTop: 20,
  },
  filledButtonLabel: {
    fontFamily: 'OpenSans-SemiBold',
    color: '#FFFFDD',
  },
});
