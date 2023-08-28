import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Header from './components/Header';

import graf from '../../assets/status/graf.png';
import grafBlack from '../../assets/status/grafBlack.png';
import line from '../../assets/status/line.png';
import pizza from '../../assets/status/pizza.png';
import grafColor from '../../assets/status/grafColor.png';
import grafBlue from '../../assets/status/grafBlue.png';

export default function Status() {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Status</Text>
        <View style={styles.containerStatus}>
          <TouchableOpacity style={styles.card}>
            <Image source={graf} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image source={pizza} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerStatus}>
          <TouchableOpacity style={styles.card}>
            <Image source={line} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image source={grafBlack} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerStatus}>
          <TouchableOpacity style={styles.card}>
            <Image source={grafColor} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image source={grafBlue} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 8,
  },
  title: {
    fontSize: 32,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#000',
    margin: 8,
  },
  containerStatus: {
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 25,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    elevation: 8,
    width: 120,
    height: 120,
    backgroundColor: '#e0e1e1',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    opacity: 0.7,
  },
});
