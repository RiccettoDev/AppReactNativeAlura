import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import imageHeader from '../../../assets/store/imageHeader.png';

const width = Dimensions.get('screen').width;

export default function Header() {
  const route = useRoute();
  const {name, image, distance} = route.params;

  return (
    <View>
      <Image source={imageHeader} style={styles.imageHeader} />
      <Text style={styles.title}>Detalhe da Cesta</Text>
      <View style={styles.description}>
        <View style={styles.containerLogo}>
          <Image source={image} style={styles.logo} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>{name}</Text>
          <Text style={styles.descriptionDistance}>{distance}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageHeader: {
    width: '100%',
    height: (578 / 768) * width,
  },
  buttonGoBack: {
    position: 'absolute',
    width: 60,
    height: 60,
    margin: 12,
  },
  goBack: {
    width: 50,
    height: 50,
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
  description: {
    flexDirection: 'row',
    padding: 20,
    marginLeft: 10,
    position: 'absolute',
    marginTop: '60%',
  },
  containerLogo: {
    borderColor: '#000',
    elevation: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  descriptionContainer: {
    flexDirection: 'row',
    marginTop: 50,
    padding: 8,
    alignSelf: 'stretch',
    width: '75%',
    height: '100%',
    justifyContent: 'space-between',
  },
  descriptionTitle: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  descriptionDistance: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: 'bold',
  },
});
