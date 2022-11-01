import React from "react";
import { StyleSheet,Text, View, Image,TouchableOpacity, SafeAreaView, StatusBar, Platform } from "react-native";


const styles = StyleSheet.create({
 
    MatchCategoryParent:{
        height:110,
        width:123,
        borderRadius:75,
        backgroundColor:'transparent',
        margin: 10
    },
    MatchCategoryParent2:{
        height:110,
        overflow: 'hidden',
        width:123,
        borderRadius:75,
        backgroundColor:'transparent',
        margin: 10
    },
    
    MatchCategorygrad:{
        bottom:4, 
        marginLeft:-2,
        height:80,
        width:125,
        borderRadius:75,  
        justifyContent:'center',

    }
})

export default styles;