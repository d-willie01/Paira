import React, { useState, useContext } from "react";
import {Text, TouchableOpacity, View, ScrollView} from 'react-native'
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import { useNavigation } from "@react-navigation/native";
import PressTest from "../components/PressTest/PressTest";
import KeyWordButton from "../components/KeyWordButton/KeyWordButton";
import BackgroundColor from "../components/Theme/BackgroundColor";
import BackButton from "../components/BackButton/BackButton";
import { SafeAreaView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";


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

<BackgroundColor>

<SafeAreaView 
   style={{
    height: heightPercentageToDP('100%'),
    width: widthPercentageToDP('100%') }}>
    
    
    <View style={{
        height:'80%',
        width:'100%',
        backgroundColor:'red',
        paddingRight:'1%',

}}
    
    
    >
        <ScrollView horizontal ={true} showsHorizontalScrollIndicator ={false}
        
        style ={{
            flexDirection:"row",
            backgroundColor:'black',
            height:'100%',
        
            
            
    
        }}>
            <View style ={{
            height:'100%',
            backgroundColor:'white',
            justifyContent:'space-evenly',
            paddingLeft:'1%',
            
            
            

            
            }}>

           <KeyWordButton text="club" onLongPress={() => handleOnLongPress("Club")}/>
            
           <KeyWordButton text="alcohol" onLongPress={() => handleOnLongPress("Alcohol")}/>
    
           <KeyWordButton text="kids" onLongPress={() => handleOnLongPress("Kids")}/>
    
           <KeyWordButton text ="animals"/>
    
        </View>
    
    
        <View style ={{
            
            height:'100%',
            backgroundColor:'white',
            justifyContent:'space-evenly',
            paddingLeft:'1%',
            
            
            
        }}>
           <KeyWordButton text="Movies"/>
           
           <KeyWordButton text="Music"/>
    
           <KeyWordButton text="Concerts"/>
    
           <KeyWordButton text ="Cars"/>
    
        </View>
        <View style ={{
            
            height:'100%',
            backgroundColor:'white',
            justifyContent:'space-evenly',
            paddingLeft:'1%',
            
            
            
        }}>
           <KeyWordButton text="Adult"/>
           
           <KeyWordButton text="Women"/>
    
           <KeyWordButton text="Men"/>
    
           <KeyWordButton text ="Shopping"/>
    
        </View>
        <View style ={{
            
            height:'100%',
            backgroundColor:'white',
            justifyContent:'space-evenly',
            paddingLeft:'1%',
            
            
            
        }}>
           <KeyWordButton text="Food"/>
           
           <KeyWordButton text="Fashion"/>
    
           <KeyWordButton text="Games"/>
    
           <KeyWordButton text ="Arcade"/>
    
        </View>
        <View style ={{
            
            height:'100%',
            backgroundColor:'white',
            justifyContent:'space-evenly',
            paddingLeft:'1%',
            
            
            
        }}>
           <KeyWordButton text="Food"/>
           
           <KeyWordButton text="Fashion"/>
    
           <KeyWordButton text="Games"/>
    
           <KeyWordButton text ="Arcade"/>
    
        </View>
        <View style ={{
            
            height:'100%',
            backgroundColor:'white',
            justifyContent:'space-evenly',
            paddingLeft:'1%',
    
            
            
            
        }}>
           <KeyWordButton text="Food"/>
           
           <KeyWordButton text="Fashion"/>
    
           <KeyWordButton text="Games"/>
    
           <KeyWordButton text ="Arcade"/>
    

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
            

 </SafeAreaView>
</BackgroundColor>



       
        
    );
};

export default CategoryOneScreen;