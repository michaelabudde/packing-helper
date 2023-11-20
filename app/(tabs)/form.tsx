import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import { useEffect, useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startMode, setStartMode] = useState('date');
  const [endMode, setEndMode] = useState('date');
  const [startShow, setStartShow] = useState(false);
  const [endShow, setEndShow] = useState(false);

  const options = {
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

  const generateList = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Trip Details</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View>
        <Text>Where are you going:</Text>
        <TextInput onChangeText={setLocation} value={location} />
      </View>
      <View>
        <Button onPress={showDatepickerStart} title="Select Start Date" />
        <Text>{startDate.toLocaleString('en-US', options)}</Text>
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
      <></>
      <View>
        <Button onPress={showDatepickerEnd} title="Select End Date" />
        <Text>{endDate.toLocaleString('en-US', options)}</Text>
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
        <Button onPress={generateList} title="Make List" />
      </View>
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
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
