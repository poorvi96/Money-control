import React from 'react'
import {Text,View,StyleSheet,Dimensions} from 'react-native'
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Expenses(){
    return(
        <View style={styles.userview}>
                <Text style={styles.usertext}>Hey Poorvi! 2023-08-24</Text>
            </View>

    )
}
const styles=StyleSheet.create({
    userview: {
        backgroundColor: 'green',
        borderRadius:25,
        width: w*.9,
        height: h * .1,
        alignItems:'center',
        marginHorizontal:20,
        marginVertical:10
        
        
    },
    usertext: {
        fontSize: 20,
        margin: 20,
        color: 'white', 
    },
    
})

