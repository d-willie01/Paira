import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "../RegistrationScreens/RegistrationScreen";
import LoginScreen from "../RegistrationScreens/LoginScreen";
import StartScreen from "../RegistrationScreens/StartScreen";



const OnNav = createNativeStackNavigator();

const OnBoardStack = () => {
    return(
        
            <OnNav.Navigator initialRouteName="SplashScreen">
                <OnNav.Screen name = "SplashScreen" component= {StartScreen}/>
                <OnNav.Screen name = 'Registration' component={RegistrationScreen}/>
                <OnNav.Screen name = "Login Screen" component = {LoginScreen}/>

            </OnNav.Navigator>
        
    );
};

export default OnBoardStack;

