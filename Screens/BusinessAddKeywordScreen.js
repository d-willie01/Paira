import React from "react";
import {Text, Button} from 'react-native'
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

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