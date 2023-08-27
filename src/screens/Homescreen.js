import React from 'react'

import Header from '../components/Header'
import TopTabBar from '../components/TopTabBar';

export default function Homescreen({navigation}) {
    function addfunc(){

        const detail={
           addcard:showcard
        }
        return <Header {...detail}/>
    }
   



function showcard(){
    navigation.navigate('amountcard')
}
    return (
        <>
            

             {addfunc()}

            <TopTabBar/>



        </>



    )

}
