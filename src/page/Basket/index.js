import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import Header from './components/Header';
import Details from './components/Details';
import Item from './components/Item';

export default function Basket({header, details, items}) {
  return (
    <View>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({id}) => id}
        ListHeaderComponent={() => {
          return (
            <>
              <Header {...header} />
              <View style={styles.container}>
                <Details {...details} />
                <Text style={styles.title}>{items.title}</Text>
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
