import React from "react";
import {Text, View, Button, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import PressButton from "../components/PressTest/PressButton";
import startScreenStyle from "../RegistrationScreens/StartSceenStyles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import { LoginButton } from "./RegistrationButtons";


const StartScreen = () => {
   
    const Startnavigation = useNavigation();

    const UserRegister1 = () => {
        Startnavigation.navigate("UserRegister");
    }

    const LoginScreen = () =>{
       
        Startnavigation.navigate("Login");

    }
    
    
   
   
    return(

 
        <View 
        style={{
            height: heightPercentageToDP('100%'),
            width: widthPercentageToDP('100%'),
            }}>
        <LinearGradient // background gradient view
        style={{height: heightPercentageToDP('100%'),
        width: widthPercentageToDP('100%') , alignItems: 'center', justifyContent: 'center'}}
        
        colors={['#FDFEFE','#626567']}>

        <View>
            <PressButton/>
        </View>
        <View style={{backgroundColor: "transparent"}}>
        <Image 
            style = {{ width: 150, height: 320}}
            source= {require('../assets/Icons/PairaLogo.png')}/>
        </View>
        <View 
            style={{
            height: '17%',
            width: '100%' , 
            alignItems: 'center', 
            marginTop: 110, 
            backgroundColor:'red',}}>
            <TouchableOpacity title ="Login" onPress={LoginScreen} style={{marginTop: 5,}}>
                <LoginButton text ='Login'/>
            </TouchableOpacity>
                <TouchableOpacity title = "register" onPress={UserRegister1}>
                <LoginButton text ='Register'/>
            </TouchableOpacity>
        </View>
        </LinearGradient>

        </View>
        
    );
};

export default StartScreen;