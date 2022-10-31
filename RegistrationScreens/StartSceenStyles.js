import React from "react";
import { StyleSheet,Text, View, Image,TouchableOpacity, SafeAreaView, StatusBar, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


const startScreenStyle = StyleSheet.create({
    backgroundofButton:{

        
            height: 60,
            width: 250,
            borderRadius: 75,
            alignItems:'center',
            marginBottom: 20,
            marginLeft: 10,
        
    },
    foreGroundButton:{
        height: 55,
        width: 300,
        borderRadius: 75,
        justifyContent:'center',
        alignItems:'center',
        },



});


export default startScreenStyle;