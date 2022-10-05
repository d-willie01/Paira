import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform, Image, TextInput } from 'react-native';
import styles from "../Styles/styles";
import { FontAwesome } from '@expo/vector-icons'; 


const BusinessProfileScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style = {{alignItems: "center"}}> Add Your Card Photo</Text>

            <View style = {styles.viewTest}>
                <TouchableOpacity
                stlye= {{width: 170, height: 150, backgroundColor: 'red'}}>
                    <FontAwesome name="building" size={120} color="black" alignItems ='center' />
                </TouchableOpacity>

            </View>

                <Text>Slogan</Text>
                    <TextInput 
                    style = {styles.textInput} 
                    placeholder = 'e.g. Brayben is extremely gay'/>

                        <Text> Describe Yourself</Text>
                     <TextInput 
                style = {styles.textInputLarge} 
                placeholder = 'e.g. We are a local mom and pop shop...'/>


        </View>
    );
};

export default BusinessProfileScreen;