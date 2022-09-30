import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";



const UserHomeScreen = () => { 
    
    const Unavigation = useNavigation();

    const AddKeyWordsScreen = () =>{
       
        Unavigation.navigate("AddKeyWordsScreen")

   
}
    return(
        <SafeAreaView >
        <Text>User Homescreen</Text>
        <Button title="AddKeyWordsScreen" onPress={AddKeyWordsScreen}/>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "orange",
      padding: 20,
      margin: 10,
    }});

    export default UserHomeScreen;