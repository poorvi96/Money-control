import React from 'react'
import { Text, View ,Image} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Expenses from '../screens/expenses';
import Payment from '../screens/payment';

const Tab = createMaterialTopTabNavigator();
export default function Toptabbar() {
    return (
        <>
         
        <Tab.Navigator>
            
            <Tab.Screen name="Expenses" component={Expenses} />
            <Tab.Screen name="Payment" component={Payment} />
            
        </Tab.Navigator>
        </>
    )
}