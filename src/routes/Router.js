import React from 'react'
import { Text } from 'react-native'
import Homescreen from '../screens/Homescreen'
import { NavigationContainer } from '@react-navigation/native';
export default function Router() {
  return (
    <NavigationContainer>
      <Homescreen />
    </NavigationContainer>


  )
}