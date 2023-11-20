import { View, Text, Image, StyleSheet } from 'react-native';

const ClothingCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={require('../assets/images/briefcase.png')}
      />

      <View>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardText}>{item.weather}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 100,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  picture: {
    width: 50,
    height: 50,
    tintColor: '#D2DE32',
  },
  cardTitle: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 20,
    color: '#61A3BA',
  },
  cardText: {
    fontFamily: 'OpenSans-Regular',
  },
});

export default ClothingCard;
