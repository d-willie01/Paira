import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserHomeScreen from "../Screens/UserHomeScreen";
import UTabNavigation from "./UTabNav";
//import UserMatchScreen from "../Screens/UserMatchMainScreen";
import UserMatchScreen from "../Screens/UserMatchScreen";

const UMatchnav = createNativeStackNavigator();

const UmatchNavigationStack = () => {
    return(
        
            <UMatchnav.Navigator initialRouteName="UserMatchMain">
                <UMatchnav.Screen name = 'UserMatchMain' component={UserMatchScreen}/>
            </UMatchnav.Navigator>
        
    );
};

export default UmatchNavigationStack;