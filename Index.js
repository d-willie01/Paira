import React, { useState, useContext } from "react";
import {NavigationContainer} from '@react-navigation/native';

import UTabNav from './Navigation/UTabNav';
import BTabNav from './BNavigation/BTabNav';
import OnBoardStack from "./OnboardProcess/OnBoardStack"
import { StateContext } from "./StateManagement/StateProvider";
import UHomeScreen2 from "./Screens/UHomeScreen2";


const AppNavigator = () => {

const {UState} = useContext(StateContext);

if (UState == null) return(
    <NavigationContainer>
        <OnBoardStack/>
    </NavigationContainer>
)
if (UState == true) return (
<NavigationContainer>
    <BTabNav/>
</NavigationContainer>
)
if (UState == false) return (
    <NavigationContainer>
        <UTabNav/>
    </NavigationContainer>
    )


}

export default AppNavigator;