import React from "react";
import {Text, Button} from 'react-native'
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BusinessAddKeyWordsScreen = () => {
    const Unavigation = useNavigation();
    
const BusinessCategoryOneScreen = () =>{
       
        Unavigation.navigate("BusinessCategoryOneScreen")
}

const BusinessCategoryTwoScreen = () =>{
       
    Unavigation.navigate("BusinessCategoryTwoScreen")
}

const BusinessCategoryThreeScreen = () =>{
       
    Unavigation.navigate("BusinessCategoryThreeScreen")
}

const BusinessCategoryFourScreen = () =>{
       
    Unavigation.navigate("BusinessCategoryFourScreen")
}
    
    return(
    <SafeAreaView>
        <Text>Choose you Category For Key Words</Text>
        <Button title="Business Category 1" onPress={BusinessCategoryOneScreen} />
        <Button title="Business Category 2" onPress={BusinessCategoryTwoScreen}/>
        <Button title="Business Category 3" onPress={BusinessCategoryThreeScreen}/>
        <Button title="Business Category 4" onPress={BusinessCategoryFourScreen}/>
    </SafeAreaView>
        );
};

export default BusinessAddKeyWordsScreen;