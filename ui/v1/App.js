import React, { useState, useContext } from "react";
import {NavigationContainer} from '@react-navigation/native';
import OnBoardStack from "./OnboardProcess/OnBoardStack"
import Card from "./components/CardPost/Card";
import StateProvider from "./StateManagement/StateProvider";
import AppNavigator from "./Index";
import ChoiceRegistration from "./Screens/ChoiceRegistrationScreen";
import UHomeScreen2 from "./Screens/UHomeScreen2";
import BusinessHomeScreenTest from "./Screens/BusinessHomeScreenTest";
import { SafeAreaView } from "react-native";
import RestaurantData from "./assets/Data/RestaurantData";
<<<<<<< HEAD:ui/v1/App.js
import BUserHomeScreen from "./BScreens/BHomeScreen/BUserHomeScreen";
import UUserHomeScreen from "./Screens/UScreens/UCreateScreens/UUserHomeScreen";
import RegistrationScreen2 from "./RegistrationScreens/RegistrationScreenOption2";
=======
import BusinessAddKeyWordsScreen from "./Screens/BusinessAddKeywordScreen";
import StartScreen from "./RegistrationScreens/StartScreen";
import UserRegistrationScreen from "./RegistrationScreens/UserRegistrationScreen";
import LoginScreen from "./RegistrationScreens/LoginScreen";

>>>>>>> 8cb616e06c662f738c1fc410c4d4f90c4e3de2fc:App.js




const card1 = RestaurantData[0];
const card2 = RestaurantData[2];





export default function App() {
  
  
  return (
    

     <StateProvider>
      <AppNavigator/>
    </StateProvider>
   

    

  
    );
  
  /*


    <StateProvider>
      <AppNavigator/>
    </StateProvider>

    */
  
 

  
  


};

/* <UHomeScreen2/> */


