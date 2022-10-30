import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserSearchMainScreen from "../Screens/MainSearchScreen"


const USearchnav = createNativeStackNavigator();

const USearchNavigationStack = () => {
    return(
        
            <USearchnav.Navigator initialRouteName="UserSearchMain" >
                <USearchnav.Screen options={{headerShown: false}} name = 'UserSearchMain' component={UserSearchMainScreen}/>
            </USearchnav.Navigator>
        
    );
};

export default USearchNavigationStack;