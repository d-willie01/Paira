import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BCreateScreen from "../BScreens/BCreateScreen/BCreateScreen";
import CardEditScreen from "../BScreens/CardEditScreen/CardEditScreen";
import EditOneCardScreen from "../BScreens/EditOneCardScreen/EditOneCardScreen";



const BNav = createNativeStackNavigator();

const BCreateStack = () => {
    return(
        
            <BNav.Navigator initialRouteName="CardEditScreen" >
                <BNav.Screen options={{headerShown:false}} name = 'BCardCreation' component={BCreateScreen}/>
                <BNav.Screen options={{headerShown:false}} name = "CardEditScreen" component = {CardEditScreen}/>
                <BNav.Screen name = "EditOneCardScreen" component = {EditOneCardScreen}/>
            </BNav.Navigator>
        
    );
};

export default BCreateStack;