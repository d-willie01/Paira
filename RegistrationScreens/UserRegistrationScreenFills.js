import React, {useState} from "react";
import {Text, View, Button, Image, TouchableOpacity, TextInput} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import { Feather } from '@expo/vector-icons'; 




export const RegistrationFills = ({placeholder}) =>{
    
    
    return(

        <LinearGradient
                    style={{
                        height: 45,
                        width: 290,
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
                            width: 285,
                            borderRadius: 75,
                            alignItems:'center',
                            }}
                        colors={['#F8C471','#F5B041' ]}>
                            <View >
                            <TextInput style={{
                                            fontSize: 20,
                                            height: 55,
                                            width: 300,
                                            marginLeft: 50,
                                            marginTop: -5,
                                            borderRadius: 75,
                                            fontWeight: "900",
                                            color: '#ffffff'}}
                                            placeholder= {placeholder}>
                            </TextInput>
                            </View>
                        </LinearGradient>
                </LinearGradient>



);


};

 export const PasswordFills = ({placeholder}) => {
    const [text, onChangeText] = useState('');
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return(
        <LinearGradient
                    style={{
                        height: '100%',
                        width: 290,
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
                            width: 285,
                            borderRadius: 75,
                            
                            }}
                        colors={['#F8C471','#F5B041' ]}>
                            <TextInput style={{
                                            fontSize: 20,
                                            height: 55,
                                            width: 260,
                                            
                                            marginLeft: 20,
                                            marginTop: -5,
                                            borderRadius: 75,
                                            fontWeight: "900",
                                            color: '#ffffff'}}
                                            placeholder = {placeholder}
                                            secureTextEntry={isSecureEntry}
                                            onChangeText={(value) => {
                                                onChangeText({name: 'password', value});
                                            }}
                                            >
                            </TextInput>
                        </LinearGradient>
                </LinearGradient>


    );

};

export const EyeButton = ({}) => {
    
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return(

        <TouchableOpacity

                    onPress={()=>{
                        setIsSecureEntry((prev)=> !prev)

                                }}>
                                <Feather name = {isSecureEntry ? 'eye-off':'eye'} size={20} color="black"/>
                </TouchableOpacity>
    );


};

export const SendRegisterButton = ({text}) =>{
    return(
        <TouchableOpacity style={{
            height: '60%',
            width: '50%',
            borderRadius:'40%',
        }}>
                <LinearGradient
                    style={{
                        height: '60%',
                        width: '110%',
                        borderRadius:'40%',
                        bottom: 5
                    }}
                    colors={['#F8C471','#FF8900' ]}>
                        
                    <LinearGradient
                        style={{
                            height: '100%',
                            width: '100%',
                            borderRadius:'100%',
                            alignItems:'center',
                            }}
                        colors={['#F8C471','#F5B041' ]}>
                            <Text style={{
                                            fontSize: 23,
                                            height: 55,
                                            marginTop: 7,
                                            fontWeight: "900",
                                            color: 'white'}}
                                            
                                            >{text}
                            </Text>
                        </LinearGradient>
                </LinearGradient>
            </TouchableOpacity>



    )

}