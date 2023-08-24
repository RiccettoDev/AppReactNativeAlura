import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';

import topo from '../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Header({title}) {
  return (
    <View>
      <Image source={topo} style={styles.imageHeader} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageHeader: {
    width: '100%',
    height: (578 / 768) * width,
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 26,
    color: '#fff',
    padding: 25,
    fontWeight: 'bold',
  },
});
