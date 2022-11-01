import React from "react";
import { StyleSheet,Text, View, Image,TouchableOpacity, SafeAreaView, StatusBar, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';






const Ustyles = StyleSheet.create({
    container: {
        flex: 1, 
        

    },
    text: {
        fontWeight:'900',
        fontSize:25,
        color:'white',
        
    },
    UBackgroundNameTag:{
        height:'60%',
        width:'60%',
        borderRadius:'25%',
        backgroundColor:'#F39C12',
        justifyContent:'center',
        },
        UForegroundNameTag:{
            height:'100%',
            width:'100%',
            justifyContent:'center',
            bottom:5,
            borderRadius:'20%',
        },
        UNameTageText:{
            fontSize:22,
            fontWeight:'900',
            color:'white',
            textAlign:'center',
            alignSelf:'center',
            fontStyle:'italic'},
        UNameTagLocationText:{
            fontSize:10,
            fontWeight:'900',
            color:'white',
            textAlign:'center',
            alignSelf:'center',
            fontStyle:'italic'
        },
})

export default Ustyles;