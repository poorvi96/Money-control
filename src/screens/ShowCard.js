import React from "react";
import { Text, View, Image, StyleSheet, ScrollView,Dimensions } from "react-native";
import { CardData } from "../Data/data";
import { TouchableOpacity } from "react-native-gesture-handler";
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
export default function ShowCard({navigation}) {
   
    function CardDataShow() {

        return (
            <>
                <View style={styles.TextView}>

                    <Text style={styles.SrText}>SrNo</Text>
                    <Text>Date</Text>
                    <Text>Amount</Text>
                    <Text>Info</Text>
                    <Text>Show</Text>
                </View>
                {
                    CardData.map(d => (
                        <View style={styles.Card}>
                            <View style={styles.CardView}>
                                <Text style={styles.text}>{d.SrNo}</Text>
                                <Text style={styles.text}>{d.Date}</Text>
                                <Text style={styles.text}>{d.Amount}</Text>
                                <Text style={styles.text}>{d.Info}</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate("showdata",{...d})}>
                                <Image source={d.Show}style={styles.text} /></TouchableOpacity>
                            </View>

                        </View>
                    ))
                }
                  
            </>
        )
    }


    return (
        <>
<ScrollView>
  <View style={styles.container}>


            <View style={styles.ShowView}>
                <Text style={styles.ShowText}>
                    SHOW CARD
                </Text>
            </View>
      
        <View>

                {CardDataShow()}
        </View>
       
  </View>
</ScrollView>
   


        </>
    )
}
const styles = StyleSheet.create({
    CardView: {

        flexDirection: "row",
        justifyContent: "space-between",

        padding: w * .08,

        backgroundColor: 'white',

    },
    // Card: {
    //     //borderRadius: 25,


    // },
    TextView: {
        flexDirection: "row",
        padding: w * .05,
        backgroundColor: 'lightgray',
        justifyContent: "space-between"
    },
    ShowView: {
    

        marginTop: h * .05,

    },
    ShowText: {
        textAlign: 'center',
        fontSize: w * .07,
        marginBottom: h * .05
    },
    container:{
       
        borderRadius:w*.5,
        backgroundColor:'gray'
        
    }



})