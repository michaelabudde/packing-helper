import { StyleSheet } from 'react-native';

import ClothingCard from '../../components/ClothingCard';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  const dummyItem = {
    name: 'T-shirt',
    picture: 'assets/images/briefcase.png',
    weather: 'cold',
  };

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
        <ClothingCard item={dummyItem} />
        <ClothingCard item={dummyItem} />
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
