import React from "react";
import { StyleSheet,Text, View, Image,TouchableOpacity, SafeAreaView, StatusBar, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


const startScreenStyle = StyleSheet.create({
    backgroundofButton:{

        
            height: "55%",
            width: '100%',
            borderRadius: '80%',
            alignItems:'center',
            marginBottom: '5%',
        
    },
    foreGroundButton:{
        height: "95%",
        width: '100%',
        borderRadius: '80%',
        justifyContent:'center',
        alignItems:'center',
        },



});


export default startScreenStyle;