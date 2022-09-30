import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UnavigationStack from "./UNavStack";
import UmatchNavigationStack from "./UMatchStack";
import { SafeareaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import USearchNavigationStack from "./SearchNavigationStack"

const UTab = createBottomTabNavigator();

const CustomPairaBottomTab = ({children, onPress}) => (
  <TouchableOpacity
  style={{
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',

  }}
  onPress={onPress}
  >
    <SafeareaView
    style={{
      width: 70,
      height: 70,
      borderRadius: 35,
    }}
    
    >
      {children}
    </SafeareaView>
  </TouchableOpacity>
)

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
        <UTab.Screen name = "Matching" component = {UmatchNavigationStack}
        options={{
          tabBarIcon: () => {
            return(
                <Image 
                  source={require('../assets/Icons/PairaLogo.png')}
                  resizeMode= "contain"
                  style={{
                    width: 30,
                    height: 30, 
                    
                  }}
                

                />
            )}
         
        }}
        
        />
        <UTab.Screen name = "Search" component = {USearchNavigationStack}/>
      </UTab.Navigator>
   
  );
};

export default UTabNav;