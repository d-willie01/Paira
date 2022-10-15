import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UnavigationStack from "./UNavStack";
import UmatchNavigationStack from "./UMatchStack";
import { SafeareaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import USearchNavigationStack from "./SearchNavigationStack"
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
        headerShown: false,
        tabBarStyle: { 
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "transparent",
            borderRadius: 15,
            height: 60,
            showLabel: false,
          },
      }}
    >
      
        <UTab.Screen name = "Home" component= {UnavigationStack}
          options = {{
            tabBarIcon : () => 
            {
              return (
                <FontAwesome5 name = "home" size= {24} color = 'white' style={{
                  bottom: -15
                }}/>
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
                    width: 40,
                    height: 40,
                    bottom: -14,
                    
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
              <FontAwesome name = "search" size= {24} color = "white" style={{
                bottom: -14,
              }}/>
            )
          }


        }}
        />
      </UTab.Navigator>
   
  );
};

export default UTabNav;