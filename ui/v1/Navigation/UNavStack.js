import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserHomeScreen from "../Screens/UserHomeScreen";
import AddKeyWordsScreen from "../Screens/AddKeyWordsScreen";
import CategoryOneScreen from "../Screens/CategoryOneScreen";
import CategoryTwoScreen from "../Screens/CategoryTwoScreen";
import CategoryThreeScreen from "../Screens/CategoryThreeScreen";
import CategoryFourScreen from "../Screens/CategoryFourScreen";
import UHomeScreen2 from "../Screens/UHomeScreen2";


const Unav = createNativeStackNavigator();

const UnavigationStack = () => {
    return(
        <Unav.Navigator initialRouteName="UserHomeScreen">
            <Unav.Screen options={{headerShown: false}} name = 'UserHomeScreen' component={UHomeScreen2}/>
            <Unav.Screen options={{headerTransparent: true}} name = "CategoryOneScreen" component = {CategoryOneScreen}/>
            <Unav.Screen options={{headerTransparent: true}} name = "CategoryTwoScreen" component = {CategoryTwoScreen}/>
            <Unav.Screen options={{headerTransparent: true}} name = "CategoryThreeScreen" component = {CategoryThreeScreen}/>
            <Unav.Screen options={{headerTransparent: true}} name = "CategoryFourScreen" component = {CategoryFourScreen}/>
        </Unav.Navigator>
    )
}

export default UnavigationStack;