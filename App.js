import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import UTabNavigation from './Navigation/UTabNav';
import UserHomeScreen from './Screens/UserHomeScreen';
import UnavigationStack from './Navigation/UNavStack';
import UmatchNavigationStack from './Navigation/UMatchStack';
import UserMatchScreen from './Screens/UserMatchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChoiceRegistration from './Screens/ChoiceRegistrationScreen';


const UTab = createBottomTabNavigator();

export default function App() {
  return (
    <ChoiceRegistration/>
      
    
    /*<NavigationContainer>
      <UTab.Navigator>
        <UTab.Screen name = "Home" component={UnavigationStack}/>
        <UTab.Screen name = "Match" component = {UmatchNavigationStack}/>
      </UTab.Navigator>
    </NavigationContainer>*/
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
<NavigationContainer>
      <UTab.Navigator>
        <UTab.Screen name = "Home" component={UnavigationStack}/>
        <UTab.Screen name = "Match" component = {UmatchNavigationStack}/>
      </UTab.Navigator>
    </NavigationContainer>
*/

