import React, { useState } from 'react'
import {Text,StyleSheet,View} from 'react-native'

export default function ShowData({route}){
    const[data,setData]=useState(route.params)
    console.log(data);
    return(<>
    <View>
    <Text>route</Text>
    
    </View>
    </>
    )
}