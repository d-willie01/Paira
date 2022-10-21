import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BUserHomeScreen from "../BScreens/BUserHomeScreen";
import BusinessHomeScreen from "../Screens/BusinessHomeScreen";
import BusinessHomeScreenTest from "../Screens/BusinessHomeScreenTest";


const BNav = createNativeStackNavigator();

const BHomeNavigationStack = () => {
    return(
        
            <BNav.Navigator initialRouteName='BHomeScreen' >
                <BNav.Screen options={{headerShown: false}} name = 'BHomeScreen' component={BusinessHomeScreenTest}/>
            </BNav.Navigator>
        
    );
};

export default BHomeNavigationStack;