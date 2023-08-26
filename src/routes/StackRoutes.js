import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Store from '../page/Store';
import TheProducers from '../page/TheProducers';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Produtores"
        component={TheProducers}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Loja" component={Store} />
    </Stack.Navigator>
  );
}
