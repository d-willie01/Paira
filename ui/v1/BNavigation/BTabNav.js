import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeareaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import BCreateStack from "./BCreateStack";
import BHomeNavigationStack from "./BHomeStack";

const BTab = createBottomTabNavigator();

const BTabNav = () => {
    return(
        <BTab.Navigator
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
                    backgroundColor: "transparent",
                    borderRadius: 15,
                    height: 60,
                    showLabel: false,
                },
            }}
        
        >
            <BTab.Screen name= "Home" component={BHomeNavigationStack} options={{ headerShown:false,

                tabBarIcon : () => {
                  return (
                    <FontAwesome5 name = "home" size= {24} color = '#D7D7D7' 
                    style={{
                      bottom: -15
                    }}/>
                  )
                }
            }}/>
            <BTab.Screen name= "Create" component={BCreateStack} 
                options={{headerShown:false,
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
        </BTab.Navigator>
    )
}

export default BTabNav;
