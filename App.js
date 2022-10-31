import React, { useState, useContext } from "react";
import {NavigationContainer} from '@react-navigation/native';
import UTabNav from './Navigation/UTabNav';
import BTabNav from './BNavigation/BTabNav';
import OnBoardStack from "./OnboardProcess/OnBoardStack"
import Card from "./components/CardPost/Card";
import StateProvider from "./StateManagement/StateProvider";
import AppNavigator from "./Index";
import ChoiceRegistration from "./Screens/ChoiceRegistrationScreen";
import UHomeScreen2 from "./Screens/UHomeScreen2";
import BusinessHomeScreenTest from "./Screens/BusinessHomeScreenTest";
import { SafeAreaView } from "react-native";
import RestaurantData from "./assets/Data/RestaurantData";
import BUserHomeScreen from "./BScreens/BHomeScreen/BUserHomeScreen";
import UUserHomeScreen from "./Screens/UScreens/UCreateScreens/UUserHomeScreen";
import BCreateScreen from "./BScreens/BCreateScreen/BCreateScreen";
import RegistrationScreen from "./RegistrationScreens/RegistrationScreen"





const card1 = RestaurantData[0];
const card2 = RestaurantData[2];





export default function App() {
  
  
  return (
    

     <StateProvider>
      <AppNavigator/>
    </StateProvider>
   

    

  
    )
  
  /*


    <StateProvider>
      <AppNavigator/>
    </StateProvider>

    */
  
 

  
  


};

/* <UHomeScreen2/> */


