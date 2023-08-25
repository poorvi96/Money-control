import React from "react";
import {  Text,View,StyleSheet,TouchableOpacity,Dimensions} from "react-native";
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;
export default function Header(){
    return(
        <>
        <View style={styles.header}>
            <View >
                <Text style={styles.header_left}> Money Control</Text>              
            </View>
            <View>
                <TouchableOpacity>
                    <Text  style={styles.header_right}>
                        add
                    </Text>
                </TouchableOpacity>    
            </View>

        </View>
        </>
    )
}
const styles=StyleSheet.create({
    header:{
        width:w,
        height:h*.1,
        backgroundColor:'#27ACF8', 
        flexDirection:"row",
        justifyContent:"space-between",
    },
    header_left:{
        fontSize:20,
        color:'white',
       marginLeft:10,
       marginTop:10
        
    },
    header_right:{
        fontSize:20,
        color:'white',
      padding:20,
        marginLeft:10,
        borderWidth:0.5,
        left:10,
        justifyContent:"center",
        borderRadius:10,
       
        

    },
       
})