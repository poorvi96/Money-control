import React from 'react'
import { Text, View ,Image} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Expense from '../screens/Expense';
import Payment from '../screens/Payment';

const Tab = createMaterialTopTabNavigator();
export default function TopTabBar() {
    return (
        <>

        <Tab.Navigator>

            <Tab.Screen name="Expenses" component={Expense} />
            <Tab.Screen name="Payment" component={Payment} />

        </Tab.Navigator>
        </>
    )
}