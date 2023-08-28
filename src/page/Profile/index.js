import React from 'react';
import {ScrollView} from 'react-native';

import Header from './components/Header';
import Details from './components/Details';

export default function Profile() {
  return (
    <ScrollView>
      <Header />
      <Details />
    </ScrollView>
  );
}
