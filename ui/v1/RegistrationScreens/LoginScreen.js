import React from "react";
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";


const LoginScreen = () => {
    return(
        <View style = {{
            flex:1,
             }}>
            <LinearGradient //background gradient view
                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                
                colors={['#FDFEFE','#626567']}>
            <View style={{marginBottom: 50}}>
            <Text style={{fontWeight:'900', fontSize: 45, color: 'white'}}>Welcome Back! </Text>
            </View>
            <View style={{alignItems: 'center'}}>
            
            <TouchableOpacity style={{alignItems:'center',justifyContent: 'center'}}>
            <LinearGradient
                    style={{
                        height: 45,
                        width: 250,
                        borderRadius: 75,
                        alignItems:'center',
                        marginBottom: 20,
                        marginLeft: 10,
                        bottom: 5
                    }}
                    colors={['#F8C471','#FF8900' ]}>
                        
                    <LinearGradient
                        style={{
                            height: 40,
                            width: 245,
                            borderRadius: 75,
                            alignItems:'center',
                            }}
                        colors={['#F8C471','#F5B041' ]}>
                            <View >
                            <TextInput style={{
                                            fontSize: 20,
                                            height: 55,
                                            width: 300,
                                            marginLeft: 95,
                                            marginTop: -5,
                                            borderRadius: 75,
                                            fontWeight: "900",
                                            opacity: 0.7,
                                            color: '#ffffff'}}
                                            placeholderTextColor="#E5E5E5"
                                            placeholder = "Email/Phone Number">
                            </TextInput>
                            </View>
                        </LinearGradient>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity >
                <LinearGradient
                    style={{
                        height: 45,
                        width: 250,
                        borderRadius: 75,
                        alignItems:'center',
                        marginBottom: 20,
                        marginLeft: 10,
                        bottom: 5
                    }}
                    colors={['#F8C471','#FF8900' ]}>
                        
                        <LinearGradient
                            style={{
                                height: 40,
                                width: 245,
                                borderRadius: 75,
                                alignItems:'center',
                                }}
                            colors={['#F8C471','#F5B041' ]}>
                                <TextInput style={{
                                                fontSize: 23,
                                                height: 55,
                                                width: 300,
                                                marginLeft: 95,
                                                marginTop: -5,
                                                borderRadius: 75,
                                                fontWeight: "900",
                                                opacity: .7,
                                                color: '#ffffff'}}
                                                placeholderTextColor="#E5E5E5"
                                                placeholder = "Password">
                                </TextInput>
                        </LinearGradient>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        
        </LinearGradient>
        </View>
    );
};

export default LoginScreen;