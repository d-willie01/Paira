import React, {useState} from "react";
import {Text, View, Button, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import BackgroundColor from "../components/Theme/BackgroundColor";
import styles from "../Styles/styles";
import PressButton from "../components/PressTest/PressButton";
import {Picker} from '@react-native-picker/picker';
import { SafeAreaView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import LoginButton from "../components/LoginButtons/LoginButton";

const StartScreen = () => {
   
    const [industry, setIndustry] = useState();
    
    
    const Startnavigation = useNavigation();

    const UserRegister1 = () => {
        Startnavigation.navigate("UserRegister");
    }

    const LoginScreen = () =>{
       
        Startnavigation.navigate("Login");

    }
    
    
   
   
    return(

 
<BackgroundColor>
    <SafeAreaView 
   style={{
    height: heightPercentageToDP('100%'),
    width: widthPercentageToDP('100%') }}>
        
       
     <View 
           style={{
            height: heightPercentageToDP('35%'),
            width: widthPercentageToDP('100%'),
                 backgroundColor:'transparent',
                 justifyContent:'center',
                 alignSelf:'center',
                 marginTop:'25%',
                 
                 
                 }}>
        <View 
           style={{
            height: heightPercentageToDP('28%'),
            width: widthPercentageToDP('28%'),
                 backgroundColor:'transparent',
                 justifyContent:'center',
                 alignSelf:'center',
                 
                 }}>

       

            <Image source={require("../assets/Icons/PairaLogo.png")} 
            style={{ height: '100%',
            width:'101.4%',
            alignSelf:'center',
            

            }}/>
        </View>
    </View>


    <View 
           style ={{
                 height: '10%',
                 width: '100%',
                 backgroundColor:'transparent',
                 marginTop:'35%',
                 justifyContent:'center',
                 alignItems:'center',
                 
            }}>
                    
             <LoginButton text="Login" onPress={LoginScreen}/>


            </View>
           
            <View 
           style ={{
                 height: '10%',
                 width: '100%',
                 backgroundColor:'transparent',
                 marginTop:'2%',
                 justifyContent:'center',
                 alignItems:'center',
                 
            }}>

            <LoginButton text="Register"onPress={UserRegister1}/>

            </View>
             
                
                





    </SafeAreaView>
</BackgroundColor>
       
        
    );
};

export default StartScreen;