import React from "react";
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import { RegistrationFills, PasswordFills, EyeButton } from "./UserRegistrationScreenFills";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import { LoginButton } from "./RegistrationButtons";


const LoginScreen = () => {
    return(
        <View 
        style={{
            height: heightPercentageToDP('100%'),
            width: widthPercentageToDP('100%'),
            }}>
            <LinearGradient // background gradient view
                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                
                colors={['#FDFEFE','#626567']}>
            <View style={{alignItems:'center', width:'100%', height:'10%', backgroundColor:'transparent'}}>
            <Text style={{fontWeight:'900', fontSize: 45, color: 'white'}}>Welcome Back! </Text>
            </View>
            <View style={{
                height:'8%',
                 width: '100%',
                 backgroundColor:'transparent',
                 alignItems:'center', 
                 alignItems: 'center', 
                 marginTop: '15%',
                 }}>
            <RegistrationFills placeholder = "Email"/>
            
             </View>
                       
                
                <View style={{height:'5%',
                 width: '100%',
                 backgroundColor:'transparent',
                 alignItems:'center', 
                 alignItems: 'center', 
                 }}>
            <PasswordFills placeholder = "Password"/>
                <View style={{position:'absolute',  right:'20%',marginTop:'1.5%'}}>
                    <EyeButton/>
                </View>
            </View>
            <View 
            style={{
            height: '15%',
            width: '100%' , 
            alignItems: 'center', 
            backgroundColor:'transparent',}}>
            <TouchableOpacity title ="Login" onPress={LoginScreen} 
                style={{
                    height: '65%',
                    width: '55%' , 
                    marginTop:'5%',
                    }}>
                <LoginButton text ='Login'/>
            </TouchableOpacity> 
            </View>      
        </LinearGradient>
        </View>
    );
};

export default LoginScreen;