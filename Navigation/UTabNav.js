import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UnavigationStack from "./UNavStack";
import UserHomeScreen from "../Screens/UserHomeScreen";

const UTab = createBottomTabNavigator();

const UTabNavigation = () =>{
    return(
        <UTab.Navigator>
            <UTab.Screen name = "UserHome" component={UnavigationStack}/>
        </UTab.Navigator>
    )
    
}

export default UTabNavigation