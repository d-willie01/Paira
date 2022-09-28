import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserHomeScreen from "../Screens/UserHomeScreen";

const Unav = createNativeStackNavigator();

const UnavigationStack = () => {
    return(
        <Unav.Navigator initialRouteName="UserHomeScreen">
            <Unav.Screen name = 'UserHomeScreen' component={UserHomeScreen}/>
        </Unav.Navigator>
    )
}

export default UnavigationStack;