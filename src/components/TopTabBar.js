import React from 'react'
import { Text, View ,Image} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Expense from '../screens/Expense';
import PaymentScreen from '../screens/PaymentScreen';

const Tab = createMaterialTopTabNavigator();
export default function TopTabBar() {
    return (
        <>

        <Tab.Navigator
         screenOptions={()=>({
            tabBarActiveTintColor:'white',
            tabBarIndicatorStyle:{
                backgroundColor:'white'
            },
            tabBarStyle:{
               backgroundColor:'#27ACF8',
               
            
        
        }
        })}
        >

            <Tab.Screen name="Expenses" component={Expense} />
            <Tab.Screen name="Payment" component={PaymentScreen} />

        </Tab.Navigator>
        </>
    )
}