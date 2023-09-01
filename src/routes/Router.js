import React from 'react'
import { Text } from 'react-native'
import Homescreen from '../screens/Homescreen'
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import AmountCard from '../screens/AmountCard';
import ShowCard from '../screens/ShowCard';
import ShowData from '../screens/ShowData';
const Stack = createStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="homescreen" component={Homescreen}/>
        <Stack.Screen name="amountcard" component={AmountCard}/>
        <Stack.Screen name="showcard" component={ShowCard}/>
        <Stack.Screen name="showdata" component={ShowData}/>


        </Stack.Navigator>

    </NavigationContainer>


  )
}