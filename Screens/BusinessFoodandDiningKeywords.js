import React, { useState, useContext } from "react";
import {Text, TouchableOpacity, View, ScrollView} from 'react-native'
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import { useNavigation } from "@react-navigation/native";
import KeyWordButton from "../components/KeyWordButton/KeyWordButton";
import styles from "../Styles/styles";

const BusinessFoodandDiningKeywords = () => {
   
    const UMatchnavigation = useNavigation();
    
    const MatchCategoryOne = () =>{
           
        UMatchnavigation.navigate("MatchCategoryOneScreen")
    };

    return(
        <View style={{
            flex: 1, 
            backgroundColor: "#d5d5d5"
            }}>
                <View style={{alignItems:'center', marginTop: 100, justifyContent: 'center'}}>
                    <Text style={styles.businessHeaderText} > Choose your Tags for Your Entertainments Business</Text>
                </View>
    
    
    
    <View >
        <ScrollView horizontal ={true} style ={{
            marginTop: 80,
            
            flexDirection:"row"
    
        }}>
            <View>
           <KeyWordButton  text="Tacos"/>
            
           <KeyWordButton text="Fries"/>
    
           <KeyWordButton text="Burgers"/>
    
           <KeyWordButton text ="Pasta"/>
    
           <KeyWordButton text = "Mediterranien"/>
        </View>
    
    
        <View >
           <KeyWordButton text="Candy"/>
           
           <KeyWordButton text="Ice Cream"/>
    
           <KeyWordButton text="Pastries"/>
    
           <KeyWordButton text ="Baking"/>
    
           <KeyWordButton text = "Snacks"/>
        </View>
        <View >
           <KeyWordButton text="Upscale"/>
           
           <KeyWordButton text="Casual"/>
    
           <KeyWordButton text="Pick-up"/>
    
           <KeyWordButton text ="Relax"/>
    
           <KeyWordButton text = "Fast"/>
        </View>
        <View>
           <KeyWordButton text="Unique"/>
           
           <KeyWordButton text="Greek"/>
    
           <KeyWordButton text="Indian"/>
    
           <KeyWordButton text ="Italian"/>
    
           <KeyWordButton text = "New"/>
        </View>
    
        </ScrollView>
    
        </View>
    

           <View style ={{
            position : "absolute",
            bottom: 150, 
            alignSelf:"center",
            
           }}>
            <MatchNowButton onPress={MatchCategoryOne}/>
            </View>
            </View>
        
    );
};

export default BusinessFoodandDiningKeywords;