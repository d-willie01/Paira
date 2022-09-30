import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UnavigationStack from "./UNavStack";
import UmatchNavigationStack from "./UMatchStack";

const UTab = createBottomTabNavigator();

const UTabNav = () => {
  return (
    
      <UTab.Navigator>
        <UTab.Screen name = "Home" component={UnavigationStack}/>
        <UTab.Screen name = "Matching" component = {UmatchNavigationStack}/>
      </UTab.Navigator>
   
  );
};

export default UTabNav;