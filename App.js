import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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

const UTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <BusinessHomeScreen/>
    </NavigationContainer>
  );

};


/*
<NavigationContainer>
      <UTab.Navigator>
        <UTab.Screen name = "Home" component={UnavigationStack}/>
        <UTab.Screen name = "Matching" component = {UmatchNavigationStack}/>
      </UTab.Navigator>
    </NavigationContainer>
  */

