import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UnavigationStack from "./UNavStack";
import UmatchNavigationStack from "./UMatchStack";
import { SafeareaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import USearchNavigationStack from "./SearchNavigationStack"
import UserHomeScreen from "../Screens/UserHomeScreen";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

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
       tabBarOptions={{
        showLabel: false,
       }}
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
            showLabel: false,
          },
      }}
    >
      
        <UTab.Screen name = "Home" component= {UnavigationStack}
          options = {{
            tabBarIcon : () => 
            {
              return (
                <FontAwesome5 name = "home" size= {24} color = "orange"/>
              )
            }


          }}
       
        
        />
        <UTab.Screen name = "Matching" component = {UmatchNavigationStack}
        options={{
          tabBarIcon: () => {
            return(
                <Image 
                  source={require('../assets/Icons/PairaLogo.png')}
                  resizeMode= "contain"
                  style={{
                    width: 100,
                    height: 100,
                    top: -18,
                    }}
                    
                   />
                    
            )}
          
         
        }}
        
        />
        <UTab.Screen name = "Search" component = {USearchNavigationStack}
        options = {{
          tabBarIcon : () => 
          {
            return (
              <FontAwesome name = "search" size= {24} color = "orange"/>
            )
          }


        }}
        />
      </UTab.Navigator>
   
  );
};

export default UTabNav;