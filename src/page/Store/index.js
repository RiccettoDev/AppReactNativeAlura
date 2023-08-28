import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import Header from './components/Header';
import Item from './components/Item';

import mock from '../../mocks/products';

export default function Store() {
  const HeaderList = () => {
    return (
      <>
        <Header />
        <View style={styles.container}>
          <Text style={styles.title}>Itens</Text>
        </View>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={mock}
        renderItem={Item}
        keyExtractor={({id}) => id}
        ListHeaderComponent={HeaderList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#000',
    padding: 8,
  },
});
