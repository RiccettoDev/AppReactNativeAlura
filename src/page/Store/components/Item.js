import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Item({item: {name, image, price}}) {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 65,
    height: 65,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    lineHeight: 26,
    marginLeft: 50,
    color: '#2a9f85',
    fontWeight: 'bold',
  },
});
