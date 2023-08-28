import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Stars from '../../../components/Stars';

import eyes from '../../../assets/home/eyes.png';

export default function Producer({id, name, image, distance, stars}) {
  const [select, setSelect] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
      <TouchableOpacity
        style={styles.containerEyes}
        onPress={() => navigation.navigate('Loja', {image, name, distance})}>
        <Image source={eyes} style={styles.eyes} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 6,
    width: '85%',
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
  containerEyes: {
    backgroundColor: '#dee4e2',
    marginVertical: 40,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 6,
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyes: {
    width: 30,
    height: 30,
  },
});
