import React from "react";
import {Text, View, Button} from 'react-native'
import { useNavigation } from "@react-navigation/native";

const UserRegistrationScreen = () => {
    const Startnavigation = useNavigation();

   const UserRegister = () => {
        Startnavigation.navigate("Registration")
   }

    return(
        <View style = {{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
        <Text>Gimme ur info</Text>
        <Button title = "Next screen" onPress={UserRegister}/>
        </View>
    );
};

export default UserRegistrationScreen;