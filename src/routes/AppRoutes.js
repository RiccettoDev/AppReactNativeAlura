import React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TheProducers from '../page/TheProducers';
import Basket from '../page/Basket';

import homeIcon from '../assets/icons/home.png';
import basketIcon from '../assets/icons/basket.png';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Produtores"
          component={TheProducers}
          options={{
            tabBarInactiveBackgroundColor: '#42b38e',
            tabBarActiveBackgroundColor: '#2a9f85',
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={homeIcon}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      tintColor: focused ? '#fff' : '#286451',
                    }}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Cesta"
          component={Basket}
          options={{
            tabBarInactiveBackgroundColor: '#42b38e',
            tabBarActiveBackgroundColor: '#2a9f85',
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={basketIcon}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      tintColor: focused ? '#fff' : '#286451',
                    }}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
