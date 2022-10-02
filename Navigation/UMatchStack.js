import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserMatchScreen from "../Screens/UserMatchHomeScreen";
import MatchCategoryOneScreen from "../Screens/MatchCategoryOneScreen";
import MatchCategoryTwoScreen from "../Screens/MatchCategoryTwoScreen";
import MatchCategoryThreeScreen from "../Screens/MatchCategoryThreeScreen";
import MatchCategoryFourScreen from "../Screens/MatchCategoryFourScreen";

const UMatchnav = createNativeStackNavigator();

const UmatchNavigationStack = () => {
    return(
        
            <UMatchnav.Navigator initialRouteName="UserMatchMain" >
                <UMatchnav.Screen options={{headerShown: true}} name = 'UserMatchMain' component={UserMatchScreen}/>
                <UMatchnav.Screen options={{headerShown: true}} name = 'MatchCategoryOneScreen' component={MatchCategoryOneScreen}/>
                <UMatchnav.Screen options={{headerShown: true}} name = 'MatchCategoryTwoScreen' component={MatchCategoryTwoScreen}/>
                <UMatchnav.Screen options={{headerShown: true}} name = 'MatchCategoryThreeScreen' component={MatchCategoryThreeScreen}/>
                <UMatchnav.Screen options={{headerShown: true}} name = 'MatchCategoryFourScreen' component={MatchCategoryFourScreen}/>

            </UMatchnav.Navigator>
        
    );
};

export default UmatchNavigationStack;