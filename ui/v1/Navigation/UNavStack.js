import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AchievementScreen from "../Screens2/AchievementsScreen/AchievementsScreen";
import FriendsScreen from "../Screens2/FriendsScreen/FriendsScreen";
import SettingsScreen from "../Screens2/SettingsScreen.js/SettingsScreen";

import UHomeScreen2 from "../Screens/UHomeScreen2";


const Unav = createNativeStackNavigator();

const UnavigationStack = () => {
    return(
        <Unav.Navigator initialRouteName="UserHomeScreen">
            <Unav.Screen options={{headerShown: false}} name = 'UserHomeScreen' component={UHomeScreen2}/>
            <Unav.Screen options={{headerShown: false}} name = 'AchievementsScreen' component={AchievementScreen}/>
            <Unav.Screen options={{headerShown: false}} name = 'FriendsScreen' component={FriendsScreen}/>
            <Unav.Screen options={{headerShown: false}} name = 'SettingsScreen' component={SettingsScreen}/>

            
        </Unav.Navigator>
    )
}

export default UnavigationStack;