import React, { useState, useContext } from "react";
import {Text, TouchableOpacity, View, ScrollView} from 'react-native'
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import { useNavigation } from "@react-navigation/native";
import KeyWordButton from "../components/KeyWordButton/KeyWordButton";

const CategoryOneScreen = () => {
    
    const UMatchnavigation = useNavigation();
    
    const MatchCategoryOne = () =>{
           
        UMatchnavigation.navigate("MatchCategoryOneScreen")
    };
    const[selectedItems, setSelectedItems ]= useState([]);

    const handleOnLongPress = (KeyWordButton) =>{
        console.log(selectedItems)
        setSelectedItems([...selectedItems, KeyWordButton])

    }
    
    
    return(
        <View style={{
            flex: 1, 
            backgroundColor: "#d5d5d5"
            }}>
    
    
    
    <View >
        <ScrollView horizontal ={true} style ={{
            marginTop: 200,
            
            flexDirection:"row"
    
        }}>
            <View style ={{
            
            justifyContent:"space-between",
            
            }}>

           <KeyWordButton text="club" onLongPress={() => handleOnLongPress("Club")}/>
            
           <KeyWordButton text="alcohol" onLongPress={() => handleOnLongPress("Alcohol")}/>
    
           <KeyWordButton text="kids" onLongPress={() => handleOnLongPress("Kids")}/>
    
           <KeyWordButton text ="animals"/>
    
           <KeyWordButton text = "outdoors"/>
        </View>
    
    
        <View style ={{
            
            justifyContent:"space-between",
            
            
            
        }}>
           <KeyWordButton text="Movies"/>
           
           <KeyWordButton text="Music"/>
    
           <KeyWordButton text="Concerts"/>
    
           <KeyWordButton text ="Cars"/>
    
           <KeyWordButton text = "Sports"/>
        </View>
        <View style ={{
            
            justifyContent:"space-between",
            
            
            
        }}>
           <KeyWordButton text="Adult"/>
           
           <KeyWordButton text="Women"/>
    
           <KeyWordButton text="Men"/>
    
           <KeyWordButton text ="Shopping"/>
    
           <KeyWordButton text = "Fast"/>
        </View>
        <View style ={{
            
            justifyContent:"space-between",
            
            
            
        }}>
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
            bottom: 100, 
            alignSelf:"center",
            
           }}>
            <MatchNowButton onPress={MatchCategoryOne}/>
            </View>
            </View>

        




       
        
    );
};

export default CategoryOneScreen;