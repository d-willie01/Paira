import React, { useState, useContext } from "react";
import {Text, TouchableOpacity, View, ScrollView} from 'react-native'
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import { useNavigation } from "@react-navigation/native";
import KeyWordButton from "../components/KeyWordButton/KeyWordButton";
import styles from "../Styles/styles";



const BusinessEntertainmentKeywords = () => {

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
           <KeyWordButton  text="Dance"/>
            
           <KeyWordButton text="Drinks"/>
    
           <KeyWordButton text="Adult"/>
    
           <KeyWordButton text ="Pets"/>
    
           <KeyWordButton text = "Outdoors"/>
        </View>
    
    
        <View >
           <KeyWordButton text="Movies"/>
           
           <KeyWordButton text="Music"/>
    
           <KeyWordButton text="Concerts"/>
    
           <KeyWordButton text ="Cars"/>
    
           <KeyWordButton text = "Sports"/>
        </View>
        <View >
           <KeyWordButton text="Kids"/>
           
           <KeyWordButton text="Women"/>
    
           <KeyWordButton text="Men"/>
    
           <KeyWordButton text ="Shopping"/>
    
           <KeyWordButton text = "Fast"/>
        </View>
        <View>
           <KeyWordButton text="Food"/>
           
           <KeyWordButton text="Fashion"/>
    
           <KeyWordButton text="Games"/>
    
           <KeyWordButton text ="Arcade"/>
    
           <KeyWordButton text = "Art"/>
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

export default BusinessEntertainmentKeywords;