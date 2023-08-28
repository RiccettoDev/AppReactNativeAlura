import React from 'react';
import {Image, Text, View, Dimensions, StyleSheet} from 'react-native';

import header from '../../../assets/profile/header.png';
import user from '../../../assets/profile/user.png';

import mock from '../../../mocks/header';

const width = Dimensions.get('screen').width;

export default function Header() {
  return (
    <View>
      <Image source={header} style={styles.imageHeader} />
      <Image source={user} style={styles.imageUser} />
      <Text style={styles.title}>{mock.welcome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageHeader: {
    width: '100%',
    height: (578 / 768) * width,
  },
  imageUser: {
    position: 'absolute',
    width: 150,
    height: 150,
    marginTop: '5%',
    marginLeft: '5%',
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 32,
    lineHeight: 34,
    color: '#fff',
    padding: 50,
    fontWeight: 'bold',
    marginTop: '45%',
  },
});
