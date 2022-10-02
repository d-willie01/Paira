import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform, Image, TextInput } from 'react-native';
import styles from "../Styles/styles";


const BusinessProfileScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text> Add Your Card Photo</Text>
            <TextInput 
            style = {styles.textInputPhoto} 
            placeholder = 'e.g.Add Your photo here.'/>
            <Text>Slogan</Text>
            <TextInput 
            style = {styles.textInput} 
            placeholder = 'e.g. Brayben is gay'/>

            <Text> Describe Yourself</Text>
            <TextInput 
            style = {styles.textInputLarge} 
            placeholder = 'e.g. We are a local mom and pop shop...'/>


        </View>
    );
};

export default BusinessProfileScreen;