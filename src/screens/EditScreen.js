import React, { useState } from 'react'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,

    StyleSheet,
    Image,
    Dimensions,

} from 'react-native';
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
import { imageDataURL } from '../Data/data';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default function EditScreen({navigation}) {
    const[mobileno,setMobile]=useState("")
    const[address,setaddress]=useState("")
    const[firstname,setFirstname]=useState("")
    const[lastname,setLastname]=useState("")
    const[email,setEmail]=useState("")
    const [selectedImage, setselectedImage] = useState(imageDataURL[0])

    function submit(){
        const params={
            firstname,lastname,email,address,mobileno
        }
        console.log(params);
        navigation.navigate('profile',params)
    }
    return (
        <>
            <View style={styles.container}>

                <View style={styles.imageview}>
                    <TouchableOpacity>
                        <Image style={{
                            width: w * .40,
                            height: h * .18,
                            borderRadius: w * .2,
                            backgroundColor: "green"
                        }} source={{ uri: selectedImage }} />
                        <View style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            zIndex: 9999
                        }}>
                            <Icon name="photo-camera" size={32} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: h * .02, fontSize: w * .06, fontWeight: "bold" }}>{firstname?firstname:"Poorvi"}</Text>
                </View>
                <ScrollView>

                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} />
                    <TextInput value={firstname} onChangeText={d=>setFirstname(d)} placeholder="First Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}

                    />
                </View>

                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} />
                    <TextInput value={lastname} onChangeText={d=>setLastname(d)} placeholder="Last Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}

                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="phone" size={20} />
                    <TextInput value={mobileno} onChangeText={d=>setMobile(d)} placeholder="Phone"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                        keyboardType='number-pad'
                    />
                </View>

                <View style={styles.action}>
                    <FontAwesome name="envelope-o" size={20} />
                    <TextInput value={email} onChangeText={d=>setEmail(d)} placeholder="Email"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                        keyboardType='email-address'

                    />
                </View>

                <View style={styles.action}>
                    <FontAwesome name="globe" size={20} />
                    <TextInput  placeholder="Country"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}

                    />
                </View>


                <View style={styles.action}>
                    <FontAwesome name="map-marker" size={20} />
                    <TextInput value={address} onChangeText={d=>setaddress(d)} placeholder="City"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}

                    />
                </View>
                   <View >
                <TouchableOpacity onPress={submit} style={styles.commandButton}>
                  <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>

              
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    imageview: {

        marginTop: h * .03,
        alignItems: "center"
    },
    action: {
        flexDirection: 'row',
        marginTop: h * .02,
        marginHorizontal: w * .05,


    },
    textInput: {
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: w*.03,
        color: '#05375a',
        flex: 1
    },
    commandButton: {
        padding: w*.04,
        borderRadius: w*.07,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: h*.02,
      },
      panelButtonTitle: {
        fontSize: w*.045,
        fontWeight: 'bold',
        color: 'white',
      },

})
