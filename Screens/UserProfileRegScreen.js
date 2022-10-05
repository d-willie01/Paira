import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform, Image, TextInput } from 'react-native';
import styles from "../Styles/styles";
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 



const UserProfileRegScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style = {{alignItems: "center"}}> Add Your Profile Picture</Text>

            <View style = {styles.viewTest}>
            <TouchableOpacity
            stlye= {{width: 170, height: 150, bakcgroundColor: 'red'}}>
             <Ionicons name="person" size={24} color="black" />
            </TouchableOpacity>
            </View>

            <Text>Slogan</Text>
            <TextInput 
            style = {styles.textInputT} 
            placeholder = 'e.g. Brayben is gay'/>

            <Text> Describe Yourself</Text>
            <TextInput 
            style = {styles.textInputLargeT} 
            placeholder = 'e.g. I like Chinese food, reading'/>


        </View>
    );
};

export default UserProfileRegScreen;