import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import Header from './components/Header';
import Details from './components/Details';
import Item from './components/Item';

import mock from '../../mocks/basket';

export default function Basket() {
  return (
    <View>
      <FlatList
        data={mock.items.list}
        renderItem={Item}
        keyExtractor={({id}) => id}
        ListHeaderComponent={() => {
          return (
            <>
              <Header {...mock.header} />
              <View style={styles.container}>
                <Details {...mock.details} />
                <Text style={styles.title}>{mock.items.title}</Text>
              </View>
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
    marginTop: 16,
  },
});
