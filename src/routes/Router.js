import React from 'react'
import { Text } from 'react-native'
import Homescreen from '../screens/Homescreen'
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import AmountCard from '../screens/AmountCard';
const Stack = createStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="homescreen" component={Homescreen}/>
        <Stack.Screen name="amountcard" component={AmountCard}/>
        </Stack.Navigator>

    </NavigationContainer>


  )
}