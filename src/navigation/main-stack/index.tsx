import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MainStackRoutes} from '@Core';
import { MainScreen, MenuScreen } from '@Screens';

const MainStackNavigator = createStackNavigator<MainStackRoutes>();

export const MainStack = () => (
  <MainStackNavigator.Navigator
    initialRouteName="Menu"
    screenOptions={{headerShown: false}}>
    <MainStackNavigator.Screen name="Menu" component={MenuScreen} />
    <MainStackNavigator.Screen name="Main" component={MainScreen} />
  </MainStackNavigator.Navigator>
);
