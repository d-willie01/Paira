import React from "react";
import { useNavigation } from "@react-navigation/native";
import {Text, ScrollView, View} from 'react-native'
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import KeyWordButton from "../components/KeyWordButton/KeyWordButton";

const CategoryFourScreen = () => {
    const UMatchnavigation = useNavigation();
    
    const goMatchCategoryFourScreen = () =>{
           
        UMatchnavigation.navigate("MatchCategoryFourScreen")
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
       <KeyWordButton text="club"/>
       
       <KeyWordButton text="alcohol"/>

       <KeyWordButton text="kids"/>

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
        <MatchNowButton text= "Match Now" onPress={goMatchCategoryFourScreen}/>
        </View>
        </View>
    );
};

export default CategoryFourScreen;