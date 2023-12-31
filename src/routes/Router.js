import React from 'react'
import { Text } from 'react-native'
import Homescreen from '../screens/Homescreen'
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import AmountCard from '../screens/AmountCard';
import ShowCard from '../screens/ShowCard';
import ShowData from '../screens/ShowData';
import Bottom from '../screens/Bottom';

import Expense from '../screens/Expense';
import EditScreen from '../screens/EditScreen';
import Card from '../screens/Card';


const Stack = createStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="bottom" component={Bottom}/>
        <Stack.Screen name="homescreen" component={Homescreen}/>

        <Stack.Screen name="amountcard" component={AmountCard}/>
        <Stack.Screen name="expense" component={Expense}/>
        <Stack.Screen name="showcard" component={ShowCard}/>
        <Stack.Screen name="showdata" component={ShowData}/>
        <Stack.Screen name="profile" component={Profile}/>
        <Stack.Screen name="edit" component={EditScreen}/>
        <Stack.Screen name="card" component={Card}/>
      
       

        


        </Stack.Navigator>

    </NavigationContainer>


  )
}