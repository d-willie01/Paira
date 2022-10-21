import React from "react";
import {Text, View, Button} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";


const StartScreen = () => {
   
    const Startnavigation = useNavigation();

    const RegistrationScreen = () =>{
       
        Startnavigation.navigate("Registration")

    }

    const LoginScreen = () =>{
       
        Startnavigation.navigate("Login")

    }
    
    
   
   
    return(

        <View style ={{flex: 1}}>
        <LinearGradient // background gradient view
        style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}
        
        colors={['#B1B1B3','#CACACC',]}>
        <Text>Welcome to Paira!</Text>
        <Button title ="Login" onPress={LoginScreen}/>
        <Button title = "register" onPress={RegistrationScreen}/>
        </LinearGradient>

        </View>
    );
};

export default StartScreen;