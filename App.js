import React, { useState, useContext } from "react";
import {NavigationContainer} from '@react-navigation/native';
import UTabNav from './Navigation/UTabNav';
import UserHomeScreen from './Screens/UserHomeScreen';
import UnavigationStack from './Navigation/UNavStack';
import UmatchNavigationStack from './Navigation/UMatchStack';
import CategoryOneScreen from './Screens/CategoryOneScreen';
import ChoiceRegistration from './Screens/ChoiceRegistrationScreen';
import UserProfileRegScreen from './Screens/UserProfileRegScreen';
import BusinessHomeScreen from './Screens/BusinessHomeScreen';
import WhatAreYouLookingForScreen from './Screens/WhatAreYouLookingForScreen';
import ChallengesButton from './components/ChallengesButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BTabNav from './BNavigation/BTabNav';
import UHomeScreen2 from './Screens/UHomeScreen2';
import BusinessProfileScreen from './Screens/BusinessProfileScreen';
import UserMatchScreen from './Screens/UserMatchScreen';
import OnBoardStack from "./OnboardProcess/OnBoardStack"
import Card from "./components/CardPost/Card";
import { SafeAreaView } from "react-native";
import RestaurantData from "./assets/Data/RestaurantData";
import BusinessAddKeyWordsScreen from "./Screens/BusinessAddKeywordScreen";
import StartScreen from "./RegistrationScreens/StartScreen";
import UserRegistrationScreen from "./RegistrationScreens/UserRegistrationScreen";




const card1 = RestaurantData[0];
const card2 = RestaurantData[2];





export default function App() {
  
  return (
    <NavigationContainer>
      <UserRegistrationScreen/>
    </NavigationContainer>

  
    )
  
  
  
  // const SetBRegistration = () =>{
  //   return(
  //     setUState(true)
  //   )
  // }

    
  //   const SetURegistration = () =>{
  //     return(
  //       setUState(false)
  //     )
  //   }

  // const [Ustate, setUState] = useState(null);

  // // if (Ustate == null) 
  // //   return (
  // //       <NavigationContainer>
  // //       <OnBoardStack/>
  // //       </NavigationContainer>
    
  // //     );

  // // else if (Ustate == true)
  // //     return(
  // //       <NavigationContainer>
  // //         <UTabNav/>
  // //       </NavigationContainer>
  // //     )
  // // else if (Ustate == true)
  // //     return(
  // //       <NavigationContainer>
  // //         <BTabNav/>
  // //       </NavigationContainer>
  // //     )
  


};

/* <UHomeScreen2/> */


