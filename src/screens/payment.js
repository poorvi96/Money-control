import React from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { product } from '../Data/data';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Payment() {
    
    
    function ProductShow(){
        return<>
            {   
            product.map(d=>(
                <>
                <View style={styles.cardView}>
                <Text>{d.card_name}</Text>
                <Text>{d.DueDate}</Text>
                <Text>{d.Due_Payment}</Text>
                </View>
                </>
             ))
            }  
        </> 
    }
    
    return (
        <>
            <ScrollView>
                <View style={styles.scroll_view}>
                    <View style={styles.userview}>
                        <Text style={styles.usertext}>Hey Poorvi! 2023-08-24</Text>
                    </View>

                   <View style={styles.card}>
                    <View style={styles.card_details}>
                       <Text style={styles.text}>{ProductShow()}</Text>
                    </View>
                    <View style={styles.card_details}>

                    </View>
                    <View style={styles.card_details}>

                    </View>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    userview: {
        backgroundColor: 'green',
        borderRadius: 25,
        width: w * .9,
        height: h * .1,
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10


    },
    usertext: {
        fontSize: 20,
        margin: 20,
        color: 'white',
    },
    card_details: {
        width: w * .93,
        height: h * .3,
        backgroundColor: 'skyblue',
        margin: 15,
        borderRadius: 20,

    },
    product_text: {
        margin: 20
    },
    card:{
        backgroundColor:'yellow'
    },
    text:{
        margin:10
    },
    cardView:{
        width:"100%",
        height:200,
        backgroundColor:'blue'
    }

})