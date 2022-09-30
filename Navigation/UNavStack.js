import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserHomeScreen from "../Screens/UserHomeScreen";
import AddKeyWordsScreen from "../Screens/AddKeyWordsScreen";
import CategoryOneScreen from "../Screens/CategoryOneScreen";
import CategoryTwoScreen from "../Screens/CategoryTwoScreen";
import CategoryThreeScreen from "../Screens/CategoryThreeScreen";
import CategoryFourScreen from "../Screens/CategoryFourScreen";


const Unav = createNativeStackNavigator();

const UnavigationStack = () => {
    return(
        <Unav.Navigator initialRouteName="UserHomeScreen">
            <Unav.Screen options={{headerShown: false}} name = 'UserHomeScreen' component={UserHomeScreen}/>
            <Unav.Screen name = "AddKeyWordsScreen" component = {AddKeyWordsScreen}/>
            <Unav.Screen name = "CategoryOneScreen" component = {CategoryOneScreen}/>
            <Unav.Screen name = "CategoryTwoScreen" component = {CategoryTwoScreen}/>
            <Unav.Screen name = "CategoryThreeScreen" component = {CategoryThreeScreen}/>
            <Unav.Screen name = "CategoryFourScreen" component = {CategoryFourScreen}/>
        </Unav.Navigator>
    )
}

export default UnavigationStack;