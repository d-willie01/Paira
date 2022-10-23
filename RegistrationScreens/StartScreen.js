import React from "react";
import {Text, View, Button, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";



const StartScreen = () => {
   
    const Startnavigation = useNavigation();

    const UserRegister1 = () => {
        Startnavigation.navigate("UserRegister");
    }

    const LoginScreen = () =>{
       
        Startnavigation.navigate("Login");

    }
    
    
   
   
    return(

        <View style ={{flex: 1}}>
        <LinearGradient // background gradient view
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        
        colors={['#FDFEFE','#626567']}>
        <Image 
            style = {{ width: 150, height: 320}}
            source= {require('../assets/Icons/PairaLogo.png')}/>
        <View style={{alignItems: 'center', marginTop: 150}}>
            <TouchableOpacity title ="Login" onPress={LoginScreen}>
                <LinearGradient
                    style={{
                        height: 60,
                        width: 250,
                        borderRadius: 75,
                        alignItems:'center',
                        marginBottom: 20,
                        marginLeft: 10,
                    }}
                    colors={['#F8C471','#FF8900' ]}>
                        
                    <LinearGradient
                        style={{
                            height: 55,
                            width: 300,
                            borderRadius: 75,
                            justifyContent:'center',
                            alignItems:'center',
                            }}
                        colors={['#F8C471','#F5B041' ]}>
                            <Text style={{
                                            fontSize: 25,
                                            
                                            fontWeight: "900",
                                            color: '#ffffff'}}>Login
                            </Text>
                        </LinearGradient>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity title = "register" onPress={RegistrationScreen}>
                <LinearGradient
                    style={{
                        height: 60,
                        width: 250,
                        borderRadius: 75,
                        alignItems:'center',
                        marginBottom: 20,
                        marginLeft: 10,
                    }}
                    colors={['#F8C471','#FF8900' ]}>
                        
                    <LinearGradient
                        style={{
                            height: 55,
                            width: 300,
                            borderRadius: 75,
                            justifyContent:'center',
                            alignItems:'center',
                            }}
                        colors={['#F8C471','#F5B041' ]}>
                            <Text style={{
                                            fontSize: 25,
                                            
                                            fontWeight: "900",
                                            color: '#ffffff'}}>Register
                            </Text>
                        </LinearGradient>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        </LinearGradient>

        </View>
    );
};

export default StartScreen;