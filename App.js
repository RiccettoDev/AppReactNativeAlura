import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#2a9f85'} barStyle={'light-content'} />
      <AppRoutes />
    </SafeAreaView>
  );
}
