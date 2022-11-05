import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BusinessHomeScreen from "../Screens/BusinessHomeScreen";
import BusinessHomeScreenTest from "../Screens/BusinessHomeScreenTest";
import BUserHomeScreen from "../BScreens/BHomeScreen/BUserHomeScreen"
import BSettingsScreen from "../BScreens/Settings/BSettingsScreen";
import BAddKeysScreen from "../BScreens/BAddKeywordsScreen.js/BAddKeysScreen";

const BNav = createNativeStackNavigator();

const BHomeNavigationStack = () => {
    return(
        
            <BNav.Navigator initialRouteName='BHomeScreen' >
                <BNav.Screen options={{headerShown: false}} name = 'BHomeScreen' component={BUserHomeScreen}/>
                <BNav.Screen options={{headerShown: false}} name = 'BSettingsScreen' component={BSettingsScreen}/>
                <BNav.Screen options={{headerShown: false}} name = 'BAddKeysScreen' component={BAddKeysScreen}/>


            </BNav.Navigator>
        
    );
};

export default BHomeNavigationStack;