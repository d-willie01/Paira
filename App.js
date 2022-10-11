import React, { useState, useContext } from "react";
import {NavigationContainer} from '@react-navigation/native';
import UTabNav from './Navigation/UTabNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BTabNav from './BNavigation/BTabNav';
import OnBoardStack from "./OnboardProcess/OnBoardStack"










export default function App() {
  
  const SetBRegistration = () =>{
    return(
      setUState(true)
    )
  }

    
    const SetURegistration = () =>{
      return(
        setUState(false)
      )
    }

  const [Ustate, setUState] = useState(null);

  if (Ustate == null) 
    return (
        <NavigationContainer>
        <OnBoardStack/>
        </NavigationContainer>
    
      );

  else if (Ustate == true)
      return(
        <NavigationContainer>
          <UTabNav/>
        </NavigationContainer>
      )
  else if (Ustate == true)
      return(
        <NavigationContainer>
          <BTabNav/>
        </NavigationContainer>
      )
  


};




