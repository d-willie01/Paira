
import {NavigationContainer} from '@react-navigation/native';
import UTabNav from './Navigation/UTabNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BTabNav from './BNavigation/BTabNav';



const UTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <UTabNav/>
    </NavigationContainer>
  );

};




