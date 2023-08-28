import React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackRoutes from './StackRoutes';
//import TheProducers from '../page/TheProducers';
import Basket from '../page/Basket';
import Profile from '../page/Profile';
import Status from '../page/Status';

import homeIcon from '../assets/icons/home.png';
import basketIcon from '../assets/icons/basket.png';
import userIcon from '../assets/icons/user.png';
import statusIcon from '../assets/icons/status.png';

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
          component={StackRoutes}
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
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarInactiveBackgroundColor: '#42b38e',
            tabBarActiveBackgroundColor: '#2a9f85',
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={userIcon}
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
          name="Status"
          component={Status}
          options={{
            tabBarInactiveBackgroundColor: '#42b38e',
            tabBarActiveBackgroundColor: '#2a9f85',
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={statusIcon}
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
