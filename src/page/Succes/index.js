import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import vector1 from '../../assets/succes/Vector.png';
import vector2 from '../../assets/succes/Vector2.png';
import trophy from '../../assets/succes/trophy.png';

export default function Succes() {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <Image source={vector1} />
        <Image source={vector2} style={styles.vector2} />
        <Image source={trophy} style={styles.trophy} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}>Parabéns!</Text>
        <Text style={styles.subtitle}>
          Agradecemos pela compra de sua cesta, seu pedido chegará em breve{' '}
        </Text>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home Produtores')}>
            <Text style={styles.titleButton}>Voltar a Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('Cesta')}>
            <Text style={styles.titleButton2}>Voltar para a Cesta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    padding: 16,
    marginLeft: 16,
    marginTop: 100,
  },
  vector2: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  trophy: {
    position: 'absolute',
    alignSelf: 'center',
    width: 150,
    height: 150,
    marginTop: 96,
  },
  title: {
    fontSize: 42,
    lineHeight: 48,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 22,
    lineHeight: 32,
    color: '#a3a3a3',
  },
  containerButton: {
    marginTop: 25,
  },
  button: {
    height: 75,
    marginTop: 16,
    backgroundColor: '#2a9f85',
    paddingVertical: 16,
    borderRadius: 6,
    elevation: 6,
  },
  titleButton: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  button2: {
    height: 75,
    marginTop: 16,
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 6,
    elevation: 6,
  },
  titleButton2: {
    textAlign: 'center',
    color: '#000',
    fontSize: 25,
    lineHeight: 32,
    fontWeight: 'bold',
  },
});
