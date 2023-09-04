import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, ScrollView, View, Dimensions, Image } from 'react-native'
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { userinfo } from '../Data/data';

import {
   
    Title,
    Caption,
   
} from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { imageDataURL } from '../Data/data';

export default function profile({ navigation,route }) {
const[data,setData]=useState(route.params)

    function showuser() {
        return <>
            {
                userinfo.map(d => (
                    <>

                        <View style={styles.userInfoSection}>
                            <View style={styles.row}>

                                <Image source ={d.Icon} />
                                <Text style={{ color: "#777777", marginLeft: w * .04,fontWeight:"bold" }}>{d.address}</Text>
                            </View>


                        </View>
                    </>
                ))
            }
        </>




    }




    const [selectedImage, setselectedImage] = useState(imageDataURL[0])
    return <>
        <View style={styles.container}>
            <View style={styles.userInfoSection}>

                <View style={styles.imageview}>
                    <Image style={{
                        width: w * .25,
                        height: h * .12,
                        borderRadius: w * .2,
                        backgroundColor: "green"
                    }} source={{ uri: selectedImage }} />

                    <View style={{ marginLeft: w * .05 }}>
                        <Title style={styles.title}>Poorvi Mittal</Title>
                        <Caption style={styles.caption}>@j_jxk</Caption>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("edit")}>
                        <Icon name="account-edit" color="#777777" style={{ marginTop: h * .01, marginHorizontal: w * .15 }} size={w * .08} />
                    </TouchableOpacity>
                </View>
            </View>



            {showuser()}
         

           <View >
            <TouchableOpacity onPress={()=>navigation.navigate('card')}style={styles.card}>
                <Text style={styles.textcard}>Add Card Details</Text>
            </TouchableOpacity>
           </View>

           



           
        </View>



    </>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    imageview: {
        flexDirection: 'row',
        marginTop: h * .03
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: h * .04,
    },
    title: {
        fontSize: w * .06,
        fontWeight: 'bold',
        marginTop: h * .01,
        marginBottom: 5
    },
    caption: {
        fontSize: w * .034,
        lineHeight: h * .021,

    },
    row: {
        flexDirection: 'row',
        
    },
card:{
    marginTop:h*.06,
    backgroundColor:'#FF6347',
    padding:w*.03,
    alignItems:"center",
    borderRadius:w*.04
}

});
