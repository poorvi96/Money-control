import React from 'react'
import { Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
export default function Router() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>


  )
}