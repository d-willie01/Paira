import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BCreateScreen from "../BScreens/BCreateScreen";



const BNav = createNativeStackNavigator();

const BCreateStack = () => {
    return(
        
            <BNav.Navigator initialRouteName="BCreateScreen" >
                <BNav.Screen name = 'BCardCreation' component={BCreateScreen}/>
            </BNav.Navigator>
        
    );
};

export default BCreateStack;