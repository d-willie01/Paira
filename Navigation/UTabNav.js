import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UnavigationStack from "./UNavStack";
import UmatchNavigationStack from "./UMatchStack";
import { View } from "react-native";
import USearchNavigationStack from "./SearchNavigationStack"

const UTab = createBottomTabNavigator();

const UTabNav = () => {
  return (
    
      <UTab.Navigator 
      screenOptions={{
        tabBarStyle: { 
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#ffffff",
            borderRadius: 15,
            height: 90,

     },
      }}
    >
      
        <UTab.Screen name = "Home" component= {UnavigationStack}/>
        <UTab.Screen name = "Matching" component = {UmatchNavigationStack}/>
        <UTab.Screen name = "Search" component = {USearchNavigationStack}/>
      </UTab.Navigator>
   
  );
};

export default UTabNav;