import React from 'react'
import { Text, StyleSheet, Dimensions, View, Image } from 'react-native'
import expenses from "../images/icons/expenses.png"
import payment from "../images/icons/payment.png"
import Toptabbar from '../navigation/toptabbar';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function HomeScreen() {
    return (
        <>
            <View style={styles.topview}>
                <Text style={styles.text}>Money Control</Text>
                <View style={styles.imageview}>
                    <View style={styles.exview}>
                        <Image source={expenses} /></View>
                    <View style={styles.payview}>
                        <Image source={payment}  /></View>
                </View>
            </View>


            <Toptabbar />


        </>



    )

}
const styles = StyleSheet.create({
    topview: {
        backgroundColor: 'skyblue',
        width: w,
        height: h * .15
    },
    text: {
        fontSize: 25,
        margin: 20,
        color: 'white'
    },
   imageview:{
    flexDirection:'row'
   },
   exview:{
    flex:1,
    marginLeft:70
   },
   payview:{
    flex:1,
    marginLeft:80,
   
   },
   



})
