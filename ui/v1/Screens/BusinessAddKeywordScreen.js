import { Button, Text, TouchableOpacity, View, ScrollView} from 'react-native'
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import KeyWordButton from "../components/KeyWordButton/KeyWordButton";
import styles from "../Styles/styles";



const BusinessAddKeyWordsScreen = () => {

    const UMatchnavigation = useNavigation();
    
    const MatchCategoryOne = () =>{
           
        UMatchnavigation.navigate("MatchCategoryOneScreen")
    };

    return(
        <View style={{
            flex: 1, 
            backgroundColor: "#d5d5d5",
            }}>
                <View style={{alignItems:'center', marginTop: 100, justifyContent: 'center'}}>
                    <Text style={styles.businessHeaderText} > Choose your Tags for Your  Business</Text>
                </View>
    
    
    
    <View >
        <ScrollView horizontal ={true} style ={{
            marginTop: 80,
            
            flexDirection:"row"
    
        }}>
            <View>
           <KeyWordButton  text=""/>
            
           <KeyWordButton text=""/>
    
           <KeyWordButton text=""/>
    
           <KeyWordButton text =""/>
    
           <KeyWordButton text = ""/>
        </View>
    
    
        <View >
           <KeyWordButton text=""/>
           
           <KeyWordButton text=""/>
    
           <KeyWordButton text=""/>
    
           <KeyWordButton text =""/>
    
           <KeyWordButton text = ""/>
        </View>
        <View >
           <KeyWordButton text=""/>
           
           <KeyWordButton text=""/>
    
           <KeyWordButton text=""/>
    
           <KeyWordButton text =""/>
    
           <KeyWordButton text = ""/>
        </View>
        <View>
           <KeyWordButton text=""/>
           
           <KeyWordButton text=""/>
    
           <KeyWordButton text=""/>
    
           <KeyWordButton text =""/>
    
           <KeyWordButton text = ""/>
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

export default BusinessAddKeyWordsScreen;


/*   
const BusinessAddKeyWordsScreen = () => {
    const Unavigation = useNavigation();
    
const BusinessEntertainmentKeywords = () =>{
       
        Unavigation.navigate("BusinessEntertainment")
}

const BusinessFoodandDiningKeywords = () =>{
       
    Unavigation.navigate("BusinessFoodandDining")
}

const BusinessNonProfitKeyWords = () =>{
       
    Unavigation.navigate("BusinessNonProfit")
}

const BusinessRetailKeywords = () =>{
       
    Unavigation.navigate("BusinessRetail")
}
const BusinessSportsandFitnessKeywords = () =>{
       
    Unavigation.navigate("BusinessSportsandFitness")
}


  
    return(
    <SafeAreaView>
        <Text>Choose you Category For Key Words</Text>
        <Button title="Entertainment" onPress={BusinessEntertainmentKeywords} />
        <Button title="Food" onPress={BusinessFoodandDiningKeywords}/>
        <Button title="Non-Profit" onPress={BusinessNonProfitKeyWords}/>
        <Button title="Retail" onPress={BusinessRetailKeywords}/>
        <Button title="Sports and Fitness" onPress={BusinessSportsandFitnessKeywords}/>
    </SafeAreaView>
        );
};

export default BusinessAddKeyWordsScreen;

*/