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
              <Text>{d.card_name}</Text>
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

                   
                    <View style={styles.card_details}>
                       
                    </View>
                    <View style={styles.card_details}>

                    </View>
                    <View style={styles.card_details}>

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
    }

})