import React, {useContext, useState} from"react";
import {Text, View, TouchableOpacity, TextInput, Button} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {StateContext} from "../StateManagement/StateProvider";




const LoginScreen = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const {BusinessState, UserState} = useContext(StateContext);
    
    
    const LoginUser = async() =>{
        
        
        
        
        try{
            
            const response = await axios.post('http://localhost:8080/auth/signin', {
                    
                    email,
                    password,
                    

            })
            if(response.status == 200 ) {
                let userToken = response.data.token;
                await AsyncStorage.setItem("userToken", userToken);

                const userResponse = await axios.get("http://localhost:8080/users/self",{
                    headers: {
                      "Authorization" : `Bearer ${userToken}`
                    }
                  })
                if (userResponse.status == 200){

                    const jsonUser = JSON.stringify(userResponse.data);
                    await AsyncStorage.setItem("user", jsonUser);
                    if(userResponse.data.company){
                        
                        console.log(userResponse.data.company)
                        
                        BusinessState();

                    }
                    else{

                        UserState();

                    }
                    console.log(userResponse.data);

                }

            }
                
    
                 } catch (e) {
                        const loginError = JSON.stringify(e.response.data);
                        console.log(e);
                        alert(loginError);
             
       
        }
        
    }
    
    
    
    
    
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
                                            placeholder = "Email/Phone Number"
                                            onChangeText={(value) => {
                                                setEmail(value);
                                            }}>
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
                                                placeholder = "Password"
                                                onChangeText={(value) => {
                                                    setPassword(value);
                                                }}>
                                </TextInput>
                        </LinearGradient>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        <Button title="Login" onPress={LoginUser}/>
        </LinearGradient>


        </View>
    );
};

export default LoginScreen;