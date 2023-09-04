import React from 'react'
import {Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Homescreen';
import Profile from './Profile';
const Tab = createBottomTabNavigator();
export default function Bottom(){
    return <>
   
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="PROFILE" component={Profile} />

     
    </Tab.Navigator>
    </>
}
