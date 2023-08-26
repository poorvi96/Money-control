import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Header() {
    return (
        <>
            <View style={styles.header}>
                <View >
                    <Text style={styles.header_left}> Money Control</Text>
                </View>
                <TouchableOpacity>
                <View style={styles.header_right}>
                    
                        <Text style={styles.text}>
                            add
                        </Text>
                  
                </View>
                </TouchableOpacity>

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
        fontSize: 20,
        color: 'white',
        marginLeft: 10,
        marginTop: 20

    },
    header_right: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'skyblue',
        marginRight: 10,
        marginVertical: 10,
        alignItems: 'center'


    },
    text: {
        fontSize: 20,
        color: 'white',

    }

})