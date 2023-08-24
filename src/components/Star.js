import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import star from '../assets/home/star.png';
import starGray from '../assets/home/starGray.png';

export default function Star({
  onPress,
  disabled = true,
  completed,
  big = false,
}) {
  const styles = stylesFunction(big);
  const getImage = () => {
    if (completed) {
      return star;
    }
    return starGray;
  };

  return (
    <View>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Image source={getImage()} style={styles.star} />
      </TouchableOpacity>
    </View>
  );
}

const stylesFunction = big =>
  StyleSheet.create({
    star: {
      width: big ? 36 : 12,
      height: big ? 36 : 12,
      marginRight: 2,
    },
  });
