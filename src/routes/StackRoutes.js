import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Store from '../page/Store';
import TheProducers from '../page/TheProducers';
import Succes from '../page/Succes';
import Basket from '../page/Basket';

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
      <Stack.Screen name="Pedido feito com sucesso!" component={Succes} />
      <Stack.Screen
        name="Cesta"
        component={Basket}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
