import React from 'react';
import {StatusBar, SafeAreaView, View} from 'react-native';

import Basket from './src/page/Basket';

import mock from './src/mocks/basket';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
        <Basket {...mock} />
      </View>
    </SafeAreaView>
  );
}
