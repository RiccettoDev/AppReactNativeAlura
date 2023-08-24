import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Stars from '../../../components/Stars';

export default function Producer({id, name, image, distance, stars}) {
  const [select, setSelect] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={() => setSelect(!select)}>
      <Image source={image} accessibilityLabel={name} style={styles.image} />
      <View style={styles.information}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars qtd={stars} editable={select} big={select} />
        </View>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 6,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});
