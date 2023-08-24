import React from 'react';
import {View} from 'react-native';

import Header from './components/Header';
import Producers from './components/Producers';

export default function TheProducers() {
  return (
    <View>
      <Producers header={Header} />
    </View>
  );
}
