import React from "react";
import {Text, View, Button} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import BackgroundColor from "../components/Theme/BackgroundColor";
import TipsButton from "../components/TipsButton/TipsButton";
import NameTagButton from "../components/ProfileInfoButtons/NameTag/NameTagButton";

const StartScreen = () => {
   
    const Startnavigation = useNavigation();

    const UserRegister1 = () => {
        Startnavigation.navigate("UserRegister");
    }

    const LoginScreen = () =>{
       
        Startnavigation.navigate("Login");

    }
    
    
   
   
    return(
        <BackgroundColor>
        <View style ={{flex: 1, alignItems: 'center', justifyContent:"center"}}>
        <Text>Welcome to Paira!</Text>
        
        
        
        <NameTagButton text= "Darius Williams"  />
        
        
        <Button title ="Login" onPress={LoginScreen}/>
        <Button title ="Register" onPress={UserRegister1}/>

        </View>
        </BackgroundColor>
    );
};

export default StartScreen;