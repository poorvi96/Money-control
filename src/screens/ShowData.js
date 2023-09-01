import React, { useState } from 'react'
import {Text} from 'react-native'
export default function ShowData({route}){
    const[data,setData]=useState(route.params)
    console.log(data);
    return<>
    <Text>route</Text>
    </>
}