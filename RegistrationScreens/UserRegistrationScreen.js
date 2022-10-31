import React, {useState} from "react";
import {Text, View, Button, Image, TouchableOpacity, TextInput} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import { Feather } from '@expo/vector-icons'; 
import {RegistrationFills, PasswordFills, EyeButton, SendRegisterButton} from "./UserRegistrationScreenFills";

const UserRegistrationScreen = () => {
    const Startnavigation = useNavigation();

   const UserRegister = () => {
        Startnavigation.navigate("Registration")
   }
   const [isSecureEntry, setIsSecureEntry] = useState(true);
   const [text, onChangeText] = useState('');

    return(
        <View style = {{
            flex:1,
        }}>
        <LinearGradient // background gradient view
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        
        colors={['#FDFEFE','#626567']}>
        <Image 
            style = {{ width: 150, height: 320}}
            source= {require('../assets/Icons/PairaLogo.png')}/>
        <View style={{alignItems: 'center', marginTop: 150}}>
            <RegistrationFills text = "Email"/>
            <PasswordFills text = "Password"/>
            
            <View style={{position:'absolute', marginTop: 73, right:17,}}>
            <EyeButton/>
            </View>
            <PasswordFills text = "Confirm Password"/>
            <View style={{position:'absolute', marginTop: 140, right:17,}}>
                <EyeButton/>
            </View>
            <SendRegisterButton  text = "Get Registered" onPress={UserRegister}/>
            
        </View>
        </LinearGradient>
        
        </View>
    );
};

export default UserRegistrationScreen;

