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
        <Text>Hello World</Text>
        <Button title="Category 1" onPress={BusinessCategoryOneScreen} />
        <Button title="Category 2" onPress={BusinessCategoryTwoScreen}/>
        <Button title="Category 3" onPress={BusinessCategoryThreeScreen}/>
        <Button title="Category 4" onPress={BusinessCategoryFourScreen}/>
    </SafeAreaView>
        );
};

export default BusinessAddKeyWordsScreen;