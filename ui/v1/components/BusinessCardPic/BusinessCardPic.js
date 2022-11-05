import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./BusinessCardPicStyles";
import { EvilIcons } from '@expo/vector-icons'; 




const BusinessCardPic = ({text}) =>{
    
    return (
        <TouchableOpacity 

        style={{
            width:'80%',
            height:'80%',
            alignContent:'center',
            justifyContent:'space-evenly'
            
        }}>
        
            <View
                 style={{
                 height:'100%',
                 width:'100%',
                 borderRadius:'40%',
                 backgroundColor:'#F39C12',}}>

                <LinearGradient
                 colors={['#F8C471','#F5B041']}
                 style={{
                 height:'100%',
                 width:'100%',
                 borderRadius:'40%',
                 bottom:'5%',
                 justifyContent:'space-evenly',
                 
                 }}> 

                </LinearGradient>
            
            </View>

</TouchableOpacity>


            
    );
};


export default BusinessCardPic;