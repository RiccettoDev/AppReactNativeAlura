import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TheProducers from '../page/TheProducers';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name=" Produtores" component={TheProducers} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
