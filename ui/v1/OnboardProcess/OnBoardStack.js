import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "../RegistrationScreens/RegistrationScreen";
import LoginScreen from "../RegistrationScreens/LoginScreen";
import StartScreen from "../RegistrationScreens/StartScreen";
import UserRegistrationScreen from "../RegistrationScreens/UserRegistrationScreen";



const OnNav = createNativeStackNavigator();

const OnBoardStack = () => {
    return(
        
            <OnNav.Navigator initialRouteName="Start">
                <OnNav.Screen name = "Start" component ={StartScreen}/>
                <OnNav.Screen name = 'Registration' component={RegistrationScreen}/>
                <OnNav.Screen name = "Login" component = {LoginScreen}/>
                <OnNav.Screen name = "UserRegister" component = {UserRegistrationScreen}/>

            </OnNav.Navigator>
        
    );
};

export default OnBoardStack;

