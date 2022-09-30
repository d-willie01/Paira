import React from "react";
import {Text, Button} from 'react-native'
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";



const UserHomeScreen = () => { 
    
    const Unavigation = useNavigation();

    const AddKeyWordsScreen = () =>{
       
        Unavigation.navigate("AddKeyWordsScreen")

   
}
    return(
        <SafeAreaView>
        <Text>User Homescreen</Text>
        <Button title="AddKeyWordsScreen" onPress={AddKeyWordsScreen}/>
        </SafeAreaView>

    )
}

export default UserHomeScreen;