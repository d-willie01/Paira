import React from "react";
import {Text, TouchableOpacity, View, ScrollView} from 'react-native'
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import { useNavigation } from "@react-navigation/native";
import PressTest from "../components/PressTest/PressTest";
import KeyWordButton from "../components/KeyWordButton/KeyWordButton";
import BackgroundColor from "../components/Theme/BackgroundColor";

const CategoryOneScreen = () => {
    
    const UMatchnavigation = useNavigation();
    
    const MatchCategoryOne = () =>{
           
        UMatchnavigation.navigate("MatchCategoryOneScreen")
    }
    
    return(

<BackgroundColor>

        <View style={{
            flex: 1, 
            backgroundColor: "transparent"
            }}>
    
    

    
    
    <View >
        <ScrollView horizontal ={true} showsHorizontalScrollIndicator ={false}
        
        style ={{
            marginTop: 100,
            
            flexDirection:"row"
    
        }}>
            <View style ={{
            
            justifyContent:"space-between",
            
            
            
        }}>
           <KeyWordButton text="club"/>
           
           <KeyWordButton text="alcohol"/>
    
           <KeyWordButton text="kids"/>
    
           <KeyWordButton text ="animals"/>
    
        </View>
    
    
        <View style ={{
            
            justifyContent:"space-between",
            
            
            
        }}>
           <KeyWordButton text="Movies"/>
           
           <KeyWordButton text="Music"/>
    
           <KeyWordButton text="Concerts"/>
    
           <KeyWordButton text ="Cars"/>
    
        </View>
        <View style ={{
            
            justifyContent:"space-between",
            
            
            
        }}>
           <KeyWordButton text="Adult"/>
           
           <KeyWordButton text="Women"/>
    
           <KeyWordButton text="Men"/>
    
           <KeyWordButton text ="Shopping"/>
    
        </View>
        <View style ={{
            
            justifyContent:"space-between",
            
            
            
        }}>
           <KeyWordButton text="Food"/>
           
           <KeyWordButton text="Fashion"/>
    
           <KeyWordButton text="Games"/>
    
           <KeyWordButton text ="Arcade"/>
    
        </View>
        <View style ={{
            
            justifyContent:"space-between",
            
            
            
        }}>
           <KeyWordButton text="Food"/>
           
           <KeyWordButton text="Fashion"/>
    
           <KeyWordButton text="Games"/>
    
           <KeyWordButton text ="Arcade"/>
    
        </View>
        <View style ={{
            
            justifyContent:"space-between",
            
            
            
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
            </View>

        
</BackgroundColor>



       
        
    );
};

export default CategoryOneScreen;