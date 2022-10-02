import React from "react";
import {Text, SafeAreaView, Button} from 'react-native'
import { useNavigation } from "@react-navigation/native";

const UserMatchScreen = () => {

    const UMatchnavigation = useNavigation();
        
    const CategoryOneScreen = () =>{
           
            UMatchnavigation.navigate("MatchCategoryOneScreen")
    }
    
    const CategoryTwoScreen = () =>{
           
        UMatchnavigation.navigate("MatchCategoryTwoScreen")
    }
    
    const CategoryThreeScreen = () =>{
           
        UMatchnavigation.navigate("MatchCategoryThreeScreen")
    }
    
    const CategoryFourScreen = () =>{
           
        UMatchnavigation.navigate("MatchCategoryFourScreen")
    }
   
   
   
   
   
    return(
       
       <SafeAreaView>
        <Text>Hello World</Text>
            <Button title="Match Category 1" onPress={CategoryOneScreen}/>
            <Button title="Match Category 2" onPress={CategoryTwoScreen}/>
            <Button title="Match Category 3"onPress={CategoryThreeScreen}/> 
            <Button title="Match Category 4" onPress={CategoryFourScreen}/>
        </SafeAreaView>
    );
};

export default UserMatchScreen;