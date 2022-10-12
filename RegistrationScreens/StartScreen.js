import React from "react";
import {Text, View, Button} from 'react-native'
import { useNavigation } from "@react-navigation/native";

const StartScreen = () => {
   
    const Startnavigation = useNavigation();

    const RegistrationScreen = () =>{
       
        Startnavigation.navigate("Registration")

    }

    const LoginScreen = () =>{
       
        Startnavigation.navigate("Login")

    }
    
    
   
   
    return(

        <View style ={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
        <Text>Welcome to Paira!</Text>
        <Button title ="Login" onPress={LoginScreen}/>
        <Button title = "register" onPress={RegistrationScreen}/>

        </View>
    );
};

export default StartScreen;