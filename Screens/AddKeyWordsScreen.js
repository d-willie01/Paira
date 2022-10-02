import React from "react";
import {Text, Button} from 'react-native'
import { SafeAreaView } from "react-native";
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
    <SafeAreaView>
        <Text>Hello World</Text>
        <Button title="Category 1" onPress={CategoryOneScreen} />
        <Button title="Category 2" onPress={CategoryTwoScreen}/>
        <Button title="Category 3" onPress={CategoryThreeScreen}/>
        <Button title="Category 4" onPress={CategoryFourScreen}/>
        </SafeAreaView>
        );
};

export default AddKeyWordsScreen;