import React from 'react'
import { Text, SafeAreaView, StyleSheet, ScrollView, View,Dimensions } from 'react-native'
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
import Icon from 'react-native-vector-icons/FontAwesome';

export default function profile() {
    return <>
      

             <Text> <Icon name="home" size={30} color="#900" /> profile</Text> 
      
    </>
}
