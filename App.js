import React from 'react'
import Router from './src/routes/Router'
import HomeScreen from './src/screens/Homescreen'
import { NavigationContainer } from '@react-navigation/native';
export default function App(){
  return(
     
    <NavigationContainer>
      <HomeScreen/>
    </NavigationContainer>
  )
}