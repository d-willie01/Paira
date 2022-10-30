import React, {useState} from "react";
import axios from "axios";
import {Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";



const UserRegistrationScreen = () => {
    const UNavigation = useNavigation();
    
    
    
    
    const NextPage = () =>{

        UNavigation.navigate("Registration");



    }
    
    const RegisterUser = async() =>{
        
        
        
        
        try{
            
            const response = await axios.post('http://localhost:8080/auth/signup', {
                    firstName,
                    lastName,
                    email,
                    password,
                    passwordConfirmation

                 })
                 .then((result) =>{
                        if(result.status == 201 ) {
                            AsyncStorage.setItem("AccessToken", result.data.token);
                            UNavigation.replace("Registration");
                        }
                    console.log(result);

                 }

                 )
            
            
                
                
            
                 } catch (e) {
            
             console.log(e)
             alert(result.response.data);
       
        }
        
    }
    
    
    
    
    
    
    
    
    
    

   const [isSecureEntry, setIsSecureEntry] = useState(true);
   const [firstName, onChangeFirstName] = useState('');
   const [lastName, onChangeLastName] = useState('');
   const [email, onChangeEmail] = useState('');
   const [password, onChangePassword] = useState("");
   const [passwordConfirmation, onChangeconfirmationPassword] = useState('');
   
    
   
   
    return(
    
       

       
       <View style ={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
       }}>
        
        
        <View>



        <TouchableOpacity style={{alignItems:'center',justifyContent: 'center'}}>
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
                                            placeholder = "First Name"
                                            onChangeText={(value) => {
                                                onChangeFirstName(value);
                                            }}>
                            </TextInput>
                            </View>
                        </LinearGradient>
                </LinearGradient>
                </TouchableOpacity>








        </View>
        
        
        
        
        
        
        
        
        <View>




        <TouchableOpacity style={{alignItems:'center',justifyContent: 'center'}}>
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
                                            placeholder = "Last Name"
                                            onChangeText={(value) => {
                                                onChangeLastName(value);
                                            }}>
                            </TextInput>
                            </View>
                        </LinearGradient>
                </LinearGradient>
                </TouchableOpacity>










        </View>


        <View>





        <TouchableOpacity style={{alignItems:'center',justifyContent: 'center'}}>
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
                                            placeholder = "Email"
                                            onChangeText={(value) => {
                                                onChangeEmail(value);
                                            }}>
                            </TextInput>
                            </View>
                        </LinearGradient>
                </LinearGradient>
                </TouchableOpacity>








        </View>


       <View>


       <TouchableOpacity>
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
                                    placeholder = "Enter Password"
                                    secureTextEntry={isSecureEntry}
                                    onChangeText={(value) => {
                                        onChangePassword(value);
                                    }}
                                    >
                    </TextInput>
                </LinearGradient>
        </LinearGradient>
    </TouchableOpacity>
       


         </View>



        <View>
       
       <TouchableOpacity>
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
                                    placeholder = "Confirm Password"
                                    secureTextEntry={isSecureEntry}
                                    onChangeText={(value) => {
                                        onChangeconfirmationPassword(value);
                                    }}
                                    >
                    </TextInput>
                </LinearGradient>
        </LinearGradient>
    </TouchableOpacity>
    
    
    </View>


    <MatchNowButton onPress={RegisterUser}/>




    <Button title= "next page" onPress={NextPage}/>















    </View>
       
    );
};

export default UserRegistrationScreen;