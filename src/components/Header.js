import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
export default function Header(props) {

    function showamount(){
        console.log(props);
        const{addcard}=props
        addcard()
    }
    return (
        <>
            <View style={styles.header}>
                <View >
                    <Text style={styles.header_left}> Money Control</Text>
                </View>
                
                <View style={styles.header_right}>
                <TouchableOpacity onPress={showamount}>
                        <Text style={styles.text}>
                            add
                        </Text>
                        </TouchableOpacity>

                </View>
                
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    header: {
        width: w,
        height: h * .1,
        backgroundColor: '#27ACF8',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    header_left: {
        fontSize: w*.06,
        color: 'white',
        marginLeft: w*.03,
        marginTop: h*.02

    },
    header_right: {
       width:w*.2,
      height:h*.075,
        borderRadius: 10,
        backgroundColor: 'skyblue',
        marginRight: w*.03,
        marginVertical: h*.01,
        alignItems: 'center',
        justifyContent:'center'


    },
    text: {
        fontSize: w*.073,
        color: 'white',

    }

})