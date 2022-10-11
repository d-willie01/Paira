
import {NavigationContainer} from '@react-navigation/native';
import UTabNav from './Navigation/UTabNav';
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




