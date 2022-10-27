import React, { useState, useContext } from "react";
import {Text, View, Button} from 'react-native'
import {StateContext} from "../StateManagement/StateProvider";


const RegistrationScreen = () => {


const {BusinessState, UserState} = useContext(StateContext);
    

  

    return(

      <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
        
        <Button title = "business" onPress={() =>{BusinessState()}}/>
        <Button title = "user" onPress={()=>{UserState()}}/>
        

      </View>
        
    );
};

export default RegistrationScreen;