import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform, Image, TextInput } from 'react-native';
import styles from "../Styles/styles";
import { FontAwesome } from '@expo/vector-icons'; 


const UserProfileRegScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style = {{alignItems: "center"}}> Add Your Card Photo</Text>

            <View style = {styles.viewTest}>
            <Image
            stlye= {{width: 170, height: 150}}/>
            <FontAwesome name="building" size={24} color="black"  />

            </View>

            <Text>Slogan</Text>
            <TextInput 
            style = {styles.textInput} 
            placeholder = 'e.g. Brayben is gay'/>

            <Text> Describe Yourself</Text>
            <TextInput 
            style = {styles.textInputLarge} 
            placeholder = 'e.g. I like Chinese food, reading'/>


        </View>
    );
};

export default UserProfileRegScreen;