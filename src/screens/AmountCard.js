import { useState } from 'react'
import React from 'react'
import {Text,View,Dimensions,StyleSheet,TouchableOpacity, Modal,TextInput,Button} from 'react-native'
import Calendar  from 'react-native-calendars/src/calendar';
import DropDownPicker from 'react-native-dropdown-picker'



const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
export default function AmountCard(){
    const[isOpen,setIsOpen]=useState(false)
    const[currentValue,setCurrentValue]=useState()

    const items=[
      {label:'Expenses',value:'Expenses'},
      {label:'Payment',value:'payment'},
    ]
      

    const[isOpen1,setIsOpen1]=useState(false)
    const[currentValue1,setCurrentValue1]=useState()

    const item=[
        {label:'HDFC-CARD',value:'HDFC-CARD'},
        {label:'SBI-2',value:'SBI-2'},
        {label:'SBI-3',value:'SBI-3'},

      ]

    const[showModal,setShowModal]=useState(false);

    
  

    return(
        <>
        
        <View style={styles.container}>
        
        <View style={styles.textview}>
        <Text style={styles.text}>Add Amount Card</Text>
        </View>
        <View style={{padding:h*.03}}>
            <DropDownPicker 
            items={items}
             open={isOpen}
              setOpen={()=>setIsOpen(!isOpen)}
              value={currentValue}
              setValue={(val)=>setCurrentValue(val)}
              maxHeight={h*.12}
              autoScroll
              placeholder="Select type"
              placeholderStyle={{color:'black',fontWeight:'bold'}}
              />

        </View>


        <View>
            <TouchableOpacity onPress={()=>setShowModal(true)} style={styles.touchable}>
                <Text style={styles.date}>Show Calendar</Text>
            </TouchableOpacity>
            <Modal visible={showModal} animationType='fade'>
                <Calendar style={styles.calendar} onDayPress={date=>{
                    console.log(date)
                    setShowModal(false)}}
                    onMonthChange={()=>{}}
                    initialDate={'2022-09-19'}/>

            </Modal>
        </View>

        <View style={{padding:h*.03}}>
            <DropDownPicker 
            items={item}
             open={isOpen1}
              setOpen={()=>setIsOpen1(!isOpen1)}
              value={currentValue1}
              setValue={(val)=>setCurrentValue1(val)}
              maxHeight={h*.12}
              autoScroll
              placeholder="Select Card "
              placeholderStyle={{color:'black',fontWeight:'bold'}}
              />

        </View>

        <View style={styles.amt_view}>
            <TextInput placeholder='Enter Amount....' style={styles.input_amt}/>
        </View>

        <View style={styles.des_view}>
            <TextInput placeholder='Enter payment info....' style={styles.input_des}/>
        </View>
        
        <View style={styles.btn}>
        <Button title='sumbit'/>
        </View>

      


       
        </View>
        
        </>
    )

}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'lightgray',
        flex:1,
        borderRadius:h*.08,
        
    },
text:{
    fontSize:w*.06,
    color:"black"
},
textview:{
    alignItems:'center',
    marginTop:h*.03
},
touchable:{
    backgroundColor:'white',
    padding:w*.02,
    alignItems:'center',
    margin:h*.03,
    borderRadius:w*.03
},
date:{
    color:'black',
    fontSize:w*.05
},
calendar:{
borderRadius:w*.02,
margin:w*.1,
elevation:w*.02
},
input_amt:{
    fontSize:w*.05,
    fontWeight:'bold',
   
},
amt_view:{
      borderRadius:w*.02,
    backgroundColor:'white',
    alignItems:'center',
    marginTop:h*.05,
    marginHorizontal:w*.06
},
input_des:{
    fontSize:w*.05,
    fontWeight:'bold',
   
},
des_view:{
      borderRadius:w*.02,
    backgroundColor:'white',
    alignItems:'center',
    marginTop:h*.05,
    marginHorizontal:w*.06,
    padding:h*.03
},
btn:{
margin:h*.08,
},




})