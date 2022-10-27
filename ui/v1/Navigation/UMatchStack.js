import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserMatchScreen from "../Screens/UserMatchScreen";
import MatchCategoryOneScreen from "../Screens/MatchCategoryOneScreen";
import MatchCategoryTwoScreen from "../Screens/MatchCategoryTwoScreen";
import MatchCategoryThreeScreen from "../Screens/MatchCategoryThreeScreen";
import MatchCategoryFourScreen from "../Screens/MatchCategoryFourScreen";
import MatchCategoryFiveScreen from "../Screens/MatchCategoryFiveScreen";
import CategoryOneScreen from "../Screens/CategoryOneScreen";
import CategoryTwoScreen from "../Screens/CategoryTwoScreen";
import CategoryThreeScreen from "../Screens/CategoryThreeScreen";
import CategoryFourScreen from "../Screens/CategoryFourScreen";

const UMatchnav = createNativeStackNavigator();

const UmatchNavigationStack = () => {
    return(
        
            <UMatchnav.Navigator initialRouteName="UserMatchMain" >
                <UMatchnav.Screen options={{headerShown: false}} name = 'UserMatchMain' component={UserMatchScreen}/>
                <UMatchnav.Screen options={{headerShown:false}} name = 'MatchCategoryOneScreen' component={MatchCategoryOneScreen} />
                <UMatchnav.Screen options={{headerShown: true}} name = 'MatchCategoryTwoScreen' component={MatchCategoryTwoScreen}/>
                <UMatchnav.Screen options={{headerShown: true}} name = 'MatchCategoryThreeScreen' component={MatchCategoryThreeScreen}/>
                <UMatchnav.Screen options={{headerShown: true}} name = 'MatchCategoryFourScreen' component={MatchCategoryFourScreen}/>
                <UMatchnav.Screen options={{headerShown: true}} name = 'MatchCategoryFiveScreen' component={MatchCategoryFiveScreen}/>
                <UMatchnav.Screen name = "CategoryTwoWords" component={CategoryTwoScreen}/>


            </UMatchnav.Navigator>
        
    );
};

export default UmatchNavigationStack;