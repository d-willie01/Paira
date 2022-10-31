import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BusinessHomeScreen from "../Screens/BusinessHomeScreen";
import BusinessHomeScreenTest from "../Screens/BusinessHomeScreenTest";
import BUserHomeScreen from "../BScreens/BHomeScreen/BUserHomeScreen"

const BNav = createNativeStackNavigator();

const BHomeNavigationStack = () => {
    return(
        
            <BNav.Navigator initialRouteName='BHomeScreen' >
                <BNav.Screen options={{headerShown: false}} name = 'BHomeScreen' component={BUserHomeScreen}/>
                
            </BNav.Navigator>
        
    );
};

export default BHomeNavigationStack;