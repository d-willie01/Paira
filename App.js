
import {NavigationContainer} from '@react-navigation/native';
import UTabNav from './Navigation/UTabNav';
import UserHomeScreen from './Screens/UserHomeScreen';
import UnavigationStack from './Navigation/UNavStack';
import UmatchNavigationStack from './Navigation/UMatchStack';
import UserMatchScreen from './Screens/UserMatchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryOneScreen from './Screens/CategoryOneScreen';
import ChoiceRegistration from './Screens/ChoiceRegistrationScreen';
import BusinessProfileScreen from './Screens/BusinessProfileScreen';
import UserProfileRegScreen from './Screens/UserProfileRegScreen';
import BusinessHomeScreen from './Screens/BusinessHomeScreen';

import BTabNav from './BNavigation/BTabNav';
import WhatAreYouLookingForScreen from './Screens/WhatAreYouLookingForScreen';
import ChallengesButton from './components/ChallengesButton';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BTabNav from './BNavigation/BTabNav';
import UHomeScreen2 from './Screens/UHomeScreen2';



const UTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <UHomeScreen2/>
    </NavigationContainer>
  );

};




