import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import { ExpData } from '../Data/data';
import { ScrollView } from 'react-native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Expense() {

    function ExpDataShow() {
        return <>
            {
                ExpData.map(d => (
                    <>

                        <View style={styles.mainView}>
                            <Text style={styles.card}>{d.card_name}</Text>

                            <View style={styles.textView}>
                                <Text style={styles.text}>Limit Rs.{d.Limit_Rs}</Text>
                                <Text style={styles.text}>Expenses Rs.{d.Expense_Rs}</Text>
                                <View style={styles.ImageView}>
                                <Image source={d.Eye} style={styles.Image} />
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
                <View style={styles.userview}>
                    <Text style={styles.usertext}>Hey Poorvi! </Text>
                </View>
                {ExpDataShow()}
            </ScrollView>
        </>

    )
}
const styles = StyleSheet.create({
    userview: {
        backgroundColor: '#334d00',
        borderRadius: 25,
        width: w * .9,
        height: h * .1,
        alignItems: 'center',
        marginHorizontal: w*.06,
        marginVertical: w*.04


    },
    usertext: {
        fontSize: w*.06,
        margin: w*.05,
        color: 'white',
    },
    mainView: {
        width: w * .9,
        height: h * .25,
        borderRadius:30,
        // marginLeft:20,
        marginLeft:w*.06,
        marginVertical:w*.03,
        alignItems: 'center',
        backgroundColor: '#454A8C',
        
        // marginTop:30
    },
    card:{
        width:w*.4,
        height:h*.04,
        marginTop:w*.09,
        fontSize:w*.06,
        textAlign:'center',
        color:'black',
        backgroundColor:'yellow'

    },
    textView:{

        flexDirection:'row'

       
    },
    RsView:{
        flexDirection:'row',
       
        right:w*.04,
        
        
    },
    text:{
         marginHorizontal:w*.08,
        marginVertical:h*.035,
        color:'white',
        flex:w*.05
       
    },
    Rs:{
        marginHorizontal:w*.03,
        color:'white',
       // left
    },
    ImageView:{
        height:h*.06,
      width:w*.2,
        backgroundColor:'#3377ff',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        top:h*.02,
        marginVertical:h*.01,
        marginHorizontal:w*.03,
      
    },
    


})