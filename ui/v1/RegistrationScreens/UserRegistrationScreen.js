import React from "react";
import {Text, View, Button, Image, TouchableOpacity, TextInput} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";

const UserRegistrationScreen = () => {
    const Startnavigation = useNavigation();

   const UserRegister = () => {
        Startnavigation.navigate("Registration")
   }

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
                                            fontSize: 25,
                                            height: 55,
                                            width: 300,
                                            marginLeft: 95,
                                            marginTop: -5,
                                            borderRadius: 75,
                                            fontWeight: "900",
                                            color: '#ffffff'}}
                                            placeholder = "Email">
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
                                            fontSize: 25,
                                            height: 55,
                                            width: 300,
                                            marginLeft: 95,
                                            marginTop: -5,
                                            borderRadius: 75,
                                            fontWeight: "900",
                                            color: '#ffffff'}}
                                            placeholder = "Password">
                            </TextInput>
                        </LinearGradient>
                </LinearGradient>
            </TouchableOpacity>
            <Button title = "Next screen" onPress={UserRegister}/>
        </View>
        </LinearGradient>
        
        </View>
    );
};

export default UserRegistrationScreen;