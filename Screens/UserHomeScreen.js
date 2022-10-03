import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Image, Button, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/styles";
import ScreenChangeButton from "../components/ScreenChangeButton";


const UserHomeScreen = () => { 
    
    const Unavigation = useNavigation();

    const AddKeyWordsScreen = () =>{
       
        Unavigation.navigate("AddKeyWordsScreen")

   
}
    return(
    <SafeAreaView style={styles.container}>
        <Button title="AddKeyWordsScreen" onPress={AddKeyWordsScreen} style={styles.button}/>
        <ScreenChangeButton/>
        <ScreenChangeButton/>
        <ScreenChangeButton/>
        
    </SafeAreaView>


    )
}


export default UserHomeScreen;