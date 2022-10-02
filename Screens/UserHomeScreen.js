import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Image, Button, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/styles";


const UserHomeScreen = () => { 
    
    const Unavigation = useNavigation();

    const AddKeyWordsScreen = () =>{
       
        Unavigation.navigate("AddKeyWordsScreen")

   
}
    return(
        <SafeAreaView>
        <Button title="AddKeyWordsScreen" onPress={AddKeyWordsScreen} style={styles.button}/>
        <SafeAreaView >
       <Text>User Homescreen</Text>
       </SafeAreaView>
       <SafeAreaView>
        <TouchableOpacity style={styles.button}/>
       </SafeAreaView>
        </SafeAreaView>


    )
}



    export default UserHomeScreen;