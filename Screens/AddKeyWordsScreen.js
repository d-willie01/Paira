import React from "react";
import {Text, Button} from 'react-native'
import { SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddKeyWordsScreen = () => {
    const Unavigation = useNavigation();
    
const CategoryOneScreen = () =>{
       
        Unavigation.navigate("CategoryOneScreen")
}

const CategoryTwoScreen = () =>{
       
    Unavigation.navigate("CategoryTwoScreen")
}

const CategoryThreeScreen = () =>{
       
    Unavigation.navigate("CategoryThreeScreen")
}

const CategoryFourScreen = () =>{
       
    Unavigation.navigate("CategoryFourScreen")
}
    
    return(
    <SafeAreaView style={{
        flex: 1
    }}>
        <View style={{
            flex: .25,
            
        }}>

        </View>
        
        
    </SafeAreaView>
        );
};

export default AddKeyWordsScreen;