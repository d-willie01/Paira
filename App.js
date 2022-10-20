import React, { useState, useContext } from "react";
import {NavigationContainer} from '@react-navigation/native';
import UTabNav from './Navigation/UTabNav';
import BTabNav from './BNavigation/BTabNav';
import OnBoardStack from "./OnboardProcess/OnBoardStack"
import Card from "./components/CardPost/Card";
import StateProvider from "./StateManagement/StateProvider";
import AppNavigator from "./Index";
import UserRegistrationScreen from "./RegistrationScreens/UserRegistrationScreen";







export default function App() {
  
  
  return (
    
    <StateProvider>
      <AppNavigator/>
    </StateProvider>
    

  
    )
  
  
  
 

  
  


};




