import React, {useContext, useState} from"react";
import {Text, View, TouchableOpacity, TextInput, Button, SafeAreaView} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {StateContext} from "../StateManagement/StateProvider";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import BackgroundColor from "../components/Theme/BackgroundColor";
import NextButton from "../components/NextButton/NextButton";




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
                    if(userResponse.data.company){
                        
                        console.log(userResponse.data.company._id)
                        
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
        <BackgroundColor>
            <SafeAreaView style ={{
                height: heightPercentageToDP('100%'),
                width: widthPercentageToDP('100%'),
                
            }}>

            
            
    <View style={{
            height: '10%',
            width: '100%',
            backgroundColor:'transparent',
            marginTop:'50%',
            justifyContent:'center',
            alignItems:'center',


        }}>
            <Text style={{
                fontSize:'40%',
                color:'white',
                fontWeight:'900',
                textAlign:'center',




            }}>Welcome Back,

            </Text>
    </View>


            
        <View style={{
            height: '10%',
            width: '100%',
            backgroundColor:'transparent',
            marginTop:'5%',
            justifyContent:'center',
            alignItems:'center',


        }}>
                <TouchableOpacity 
                            style={{
                            width:'60%',
                            height:'50%',
                            alignContent:'center',
                            justifyContent:'space-evenly'
                            
                        }}
                        >
                        
                            <View
                                style={{
                                height:'100%',
                                width:'100%',
                                borderRadius:'40%',
                                backgroundColor:'#F39C12',}}>

                                <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{
                                height:'100%',
                                width:'100%',
                                borderRadius:'40%',
                                bottom:'5%',
                                justifyContent:'space-evenly',
                                
                                }}><TextInput
                                
                                style ={{
                                    fontStyle:'normal',
                                    fontWeight:'600',
                                    color:'white',
                                    textAlign:'center',
                                    fontSize:'20%',

                                }}

                                
                                placeholder ="Email"
                                onChangeText={(value) => setEmail(value)}>
                                

                                </TextInput>
                                </LinearGradient>
    
                            </View>

                </TouchableOpacity>

        </View>




        <View style={{
              height: '10%',
              width: '100%',
              backgroundColor:'transparent',
              marginTop:'5%',
              justifyContent:'center',
              alignItems:'center',

        }}>

            <TouchableOpacity 
                            style={{
                            width:'60%',
                            height:'50%',
                            alignContent:'center',
                            justifyContent:'space-evenly'
                            
                        }}
                        >
                            <View
                                style={{
                                height:'100%',
                                width:'100%',
                                borderRadius:'40%',
                                backgroundColor:'#F39C12',}}>

                                <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{
                                height:'100%',
                                width:'100%',
                                borderRadius:'40%',
                                bottom:'5%',
                                justifyContent:'space-evenly',
                                
                                }}><TextInput
                                
                                style ={{
                                    fontStyle:'normal',
                                    fontWeight:'600',
                                    color:'white',
                                    textAlign:'center',
                                    fontSize:'20%',

                                }}

                                secureTextEntry ={true}
                                placeholder ="Password"
                                onChangeText={(value) => setPassword(value)}>
                                

                                </TextInput>
                                </LinearGradient>
    
                            </View>

                </TouchableOpacity>


            </View>


            <View  style={{ 
                height: '10%',
                width: '100%',
                backgroundColor:'transparent',
                marginTop:'5%',
                justifyContent:'center',
                alignItems:'center',
            }}>

                            
                                <NextButton onPress={LoginUser}/>

            </View>















            </SafeAreaView>
        </BackgroundColor>
    );
};

export default LoginScreen;