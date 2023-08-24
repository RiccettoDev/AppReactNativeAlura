import React from 'react';
import {StatusBar, SafeAreaView, View, StyleSheet} from 'react-native';

import Basket from './src/page/Basket';
import Home from './src/page/Home';

import mock from './src/mocks/basket';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
        {/*<Basket {...mock} />*/}
        <Home />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1},
});
