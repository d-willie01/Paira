import React from "react";
import {Text, FlatList, View, TouchableOpacity } from 'react-native'
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



const CardEditScreen = () =>{

    const UNavigation = useNavigation();


    const NextScreen = () =>{
        UNavigation.navigate("BCardCreation");
    }






    return(



        <View style ={{
            flex:1,
            alignItems:"center",
            justifyContent:"center"

        }}>
        <Text>Hello World</Text>
        
        
        
        
        <View>
        <TouchableOpacity onPress={NextScreen}>
        <EvilIcons name = "plus" size={20} color ="black"/>
        </TouchableOpacity>
        </View>
        
        
        
        
        
        </View>
    
    
    )



}

export default CardEditScreen;