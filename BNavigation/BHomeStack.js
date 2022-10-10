import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BUserHomeScreen from "../BScreens/BUserHomeScreen";


const BNav = createNativeStackNavigator();

const BHomeNavigationStack = () => {
    return(
        
            <BNav.Navigator initialRouteName='BHomeScreen' >
                <BNav.Screen options={{headerShown: true}} name = 'BHomeScreen' component={BUserHomeScreen}/>
            </BNav.Navigator>
        
    );
};

export default BHomeNavigationStack;