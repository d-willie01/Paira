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
import CategoryFiveScreen from "../Screens/CategoryFiveScreen";
import FlagScreen from "../Screens2/FlagScreen/FlagScreen";

const UMatchnav = createNativeStackNavigator();

const UmatchNavigationStack = () => {
    return(
        
            <UMatchnav.Navigator initialRouteName="UserMatchMain" >
                <UMatchnav.Screen options={{headerShown: false}} name = 'UserMatchMain' component={UserMatchScreen}/>
                <UMatchnav.Screen options={{headerTransparent: true}} name = 'MatchCategoryOneScreen' component={MatchCategoryOneScreen} />
                <UMatchnav.Screen options={{headerTransparent: true}} name = 'MatchCategoryTwoScreen' component={MatchCategoryTwoScreen}/>
                <UMatchnav.Screen options={{headerTransparent: true}} name = 'MatchCategoryThreeScreen' component={MatchCategoryThreeScreen}/>
                <UMatchnav.Screen options={{headerTransparent: true}} name = 'MatchCategoryFourScreen' component={MatchCategoryFourScreen}/>
                <UMatchnav.Screen options={{headerTransparent: true}} name = 'MatchCategoryFiveScreen' component={MatchCategoryFiveScreen}/>
                <UMatchnav.Screen options={{headerTransparent: true}} name = "CategoryTwoWords" component={CategoryTwoScreen}/>
                <UMatchnav.Screen options={{headerTransparent: true}} name = "CategoryThreeWords" component={CategoryThreeScreen}/>
                <UMatchnav.Screen options={{headerTransparent: true}} name = "CategoryFourWords" component={CategoryFourScreen}/>
                <UMatchnav.Screen options={{headerTransparent: true}} name = "CategoryOneWords" component={CategoryOneScreen}/>
                <UMatchnav.Screen options={{headerTransparent: true}} name = "CategoryFiveWords" component={CategoryFiveScreen}/>
                <UMatchnav.Screen options={{headerTransparent: true}} name = "FlagScreen" component={FlagScreen}/>



            </UMatchnav.Navigator>
        
    );
};

export default UmatchNavigationStack;