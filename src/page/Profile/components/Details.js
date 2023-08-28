import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import mock from '../../../mocks/header';

export default function Details() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Usuário</Text>
        <View style={styles.card}>
          <Text style={styles.info}>{mock.user}</Text>
        </View>
        <Text style={styles.title}>Logradouro</Text>
        <View style={styles.card}>
          <Text style={styles.info}>{mock.street}</Text>
        </View>
        <Text style={styles.title}>Complemento</Text>
        <View style={styles.card}>
          <Text style={styles.info}>{mock.complement}</Text>
        </View>
        <Text style={styles.title}>Bairro</Text>
        <View style={styles.card}>
          <Text style={styles.info}>{mock.neighborhood}</Text>
        </View>
        <Text style={styles.title}>Cidade</Text>
        <View style={styles.card}>
          <Text style={styles.info}>{mock.city}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    height: '58%',
    borderRadius: 8,
    backgroundColor: '#e0e1e1',
    elevation: 4,
  },
  title: {
    fontSize: 28,
    lineHeight: 26,
    fontWeight: 'bold',
    color: '#2a9f85',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    elevation: 4,
  },
  info: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
  },
});
