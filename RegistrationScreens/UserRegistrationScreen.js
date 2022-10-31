import React, {useState} from "react";
import {Text, View, Button, Image, TouchableOpacity, TextInput} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import { Feather } from '@expo/vector-icons'; 
import {RegistrationFills, PasswordFills, EyeButton, SendRegisterButton} from "./UserRegistrationScreenFills";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import BackgroundColor from "../components/Theme/BackgroundColor";

const UserRegistrationScreen = () => {
    const Startnavigation = useNavigation();

   const UserRegister = () => {
        Startnavigation.navigate("Registration")
   }
   const [isSecureEntry, setIsSecureEntry] = useState(true);
   const [text, onChangeText] = useState('');

    return(
        <View style={{
            height: heightPercentageToDP('100%'),
            width: widthPercentageToDP('100%') }}>
        <LinearGradient // background gradient view
        style={{alignItems: 'center', justifyContent: 'center'}}
        
        colors={['#FDFEFE','#626567']}>
        <View 
           style ={{
                 height: '40%',
                 width: '100%',
                 backgroundColor:'transparent',
                 marginTop:'5%',
                 alignItems:'center',
                 
            }}>
        <Image 
            style = {{ width: 150, height: 320}}
            source= {require('../assets/Icons/PairaLogo.png')}/>
        </View>
        <View style={{height:'5%',
                 width: '100%',
                 backgroundColor:'red',
                 alignItems:'center', 
                 alignItems: 'center', 
                 marginTop: '20%',
                 }}>
            <RegistrationFills placeholder = "Email"/>
            
        </View>
        <View style={{height:'5%',
                 width: '100%',
                 backgroundColor:'blue',
                 alignItems:'center', 
                 alignItems: 'center', 
                 marginTop: '5%',
                 }}>
        <PasswordFills placeholder = "Password"/>
        </View>
            
            <View style={{position:'absolute', marginTop: 73, right:17,}}>
            <EyeButton/>
            </View>
            <View style ={{
                 height:'5%',
                 width: '100%',
                 backgroundColor:'yellow',
                 alignItems:'center',
                 marginTop: '5%',
                 
                 }}>
            <PasswordFills placeholder = "Confirm Password"/>
            
            </View>
            <View style={{position:'absolute', marginTop: '10%', right:17,}}>
                <EyeButton/>
            </View>
            <View style ={{
                 height:'10%',
                 width: '100%',
                 backgroundColor:'red',
                 alignItems:'center',
                 marginTop: '5%'
                 }}>
            <SendRegisterButton  text = "Get Registered" onPress={UserRegister}/>
            </View>
            
        
        </LinearGradient>
        
        </View>
    );
};

export default UserRegistrationScreen;

