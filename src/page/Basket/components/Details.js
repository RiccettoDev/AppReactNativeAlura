import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Details({
  nameBasket,
  logoFarm,
  nameFarm,
  description,
  price,
  button,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.basket}>
      <Text style={styles.nameBasket}>{nameBasket}</Text>
      <View style={styles.farm}>
        <Image source={logoFarm} style={styles.imageFarm} />
        <Text style={styles.nameFarm}>{nameFarm}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pedido feito com sucesso!')}>
        <Text style={styles.txtButton}>{button}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nameBasket: {
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  imageFarm: {
    width: 32,
    height: 32,
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  description: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2a9f85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#2a9f85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  txtButton: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
