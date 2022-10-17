
import {NavigationContainer} from '@react-navigation/native';
import UTabNav from './Navigation/UTabNav';
import UserHomeScreen from './Screens/UserHomeScreen';
import UnavigationStack from './Navigation/UNavStack';
import UmatchNavigationStack from './Navigation/UMatchStack';
import UserMatchScreen from './Screens/UserMatchScreen';
import CategoryOneScreen from './Screens/CategoryOneScreen';
import ChoiceRegistration from './Screens/ChoiceRegistrationScreen';
import BusinessProfileScreen from './Screens/BusinessProfileScreen';
import UserProfileRegScreen from './Screens/UserProfileRegScreen';
import BusinessHomeScreen from './Screens/BusinessHomeScreen';
import WhatAreYouLookingForScreen from './Screens/WhatAreYouLookingForScreen';
import ChallengesButton from './components/ChallengesButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BTabNav from './BNavigation/BTabNav';
import UHomeScreen2 from './Screens/UHomeScreen2';
import BusinessHomeScreenTest from './Screens/BusinessHomeScreenTest'
import AddKeyWordsScreen from './Screens/AddKeyWordsScreen';


const UTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <UTabNav/> 
    </NavigationContainer>
  );

};

/* <UHomeScreen2/> */


