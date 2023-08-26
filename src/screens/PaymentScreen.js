import React from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { product } from '../Data/data';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
//project
export default function PaymentScreen() {


    function ProductShow() {
        return <>
            {
                product.map(d => (
                    <>
                        <View style={styles.cardView}>
                            <View style={styles.duedate}>
                                <Text style={styles.text}>{d.card_name}</Text>
                                <Text style={styles.text}>=DueDate({d.DueDate})</Text>
                            </View>
                            <View style={styles.duepayment_view}>
                                <Text style={styles.duepay}>Due Payment Rs.{d.Due_Payment}/-</Text>
                                <View style={styles.payview} >
                                    <TouchableOpacity style={styles.payviewbtn}>
                                   
                                        <Text style={styles.pay}>  Pay Now</Text>
                                 
                                    </TouchableOpacity>
                                </View>
                                    </View>
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
                    {ProductShow()}


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

    cardView: {
        width: w * .9,
        height: h*.25,
        backgroundColor: 'skyblue',
        marginTop: 20,
        borderRadius: 30,
        marginHorizontal: 20,
        padding: 20

    },
    text: {
        fontSize: w*.05,
        backgroundColor: 'orange',


    },
    duedate: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: h*.025

    },
    duepay: {
        fontSize: 15,
        color: 'white',
         flex:.5

    },
    payview: {
        flex:.7,
        backgroundColor: '#27ACF8',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
       
    },
    payviewbtn: {
        
        backgroundColor: '#27ACF8',
    },
    duepayment_view: {
        flexDirection: 'row',
        marginVertical:h*.03
    },
    pay: {
        fontSize:w*.04,
        color: 'white',
    }


})