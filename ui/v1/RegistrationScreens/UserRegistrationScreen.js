import React, {useState} from "react";
<<<<<<< HEAD
import {Text, View, Button, Image, TouchableOpacity, TextInput} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import { Feather } from '@expo/vector-icons'; 


const UserRegistrationScreen = () => {
    const Startnavigation = useNavigation();

   const UserRegister = () => {
        Startnavigation.navigate("Registration")
   }
   const [isSecureEntry, setIsSecureEntry] = useState(true);
   const [text, onChangeText] = useState('');

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
=======
import axios from "axios";
import {Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
//import { StateContext } from "./StateManagement/StateProvider"; 



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
            if(response.status == 201 ) {
                let userToken = response.data.token;
                await AsyncStorage.setItem("userToken", userToken);
                UNavigation.replace("Registration");
            }
                
    
                 } catch (e) {
            
             console.log(e)
             
       
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
>>>>>>> 8cb616e06c662f738c1fc410c4d4f90c4e3de2fc
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
<<<<<<< HEAD
                                            placeholder = "Email">
=======
                                            placeholder = "First Name"
                                            onChangeText={(value) => {
                                                onChangeFirstName(value);
                                            }}>
>>>>>>> 8cb616e06c662f738c1fc410c4d4f90c4e3de2fc
                            </TextInput>
                            </View>
                        </LinearGradient>
                </LinearGradient>
                </TouchableOpacity>
<<<<<<< HEAD
                <TouchableOpacity >
                <LinearGradient
=======








        </View>
        
        
        
        
        
        
        
        
        <View>




        <TouchableOpacity style={{alignItems:'center',justifyContent: 'center'}}>
            <LinearGradient
>>>>>>> 8cb616e06c662f738c1fc410c4d4f90c4e3de2fc
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
<<<<<<< HEAD
                            
                            }}
                        colors={['#F8C471','#F5B041' ]}>
                            <TextInput style={{
                                            fontSize: 20,
                                            height: 55,
                                            width: 260,
                                            
                                            marginLeft: 20,
=======
                            alignItems:'center',
                            }}
                        colors={['#F8C471','#F5B041' ]}>
                            <View >
                            <TextInput style={{
                                            fontSize: 20,
                                            height: 55,
                                            width: 300,
                                            marginLeft: 50,
>>>>>>> 8cb616e06c662f738c1fc410c4d4f90c4e3de2fc
                                            marginTop: -5,
                                            borderRadius: 75,
                                            fontWeight: "900",
                                            color: '#ffffff'}}
<<<<<<< HEAD
                                            placeholder = "Enter Password"
                                            secureTextEntry={isSecureEntry}
                                            onChangeText={(value) => {
                                                onChangeText({name: 'password', value});
                                            }}
                                            >
                            </TextInput>
                        </LinearGradient>
                </LinearGradient>
            </TouchableOpacity>
            <View style={{position:'absolute', marginTop: 73, right:17,}}>
                <TouchableOpacity

                    onPress={()=>{
                        setIsSecureEntry((prev)=> !prev)

                                }}>
                                <Feather name = {isSecureEntry ? 'eye-off':'eye'} size={20} color="black"/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity >
                <LinearGradient
=======
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
>>>>>>> 8cb616e06c662f738c1fc410c4d4f90c4e3de2fc
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
<<<<<<< HEAD
                            
                            }}
                        colors={['#F8C471','#F5B041' ]}>
                            <TextInput style={{
                                            fontSize: 20,
                                            height: 55,
                                            width: 260,
                                            
                                            marginLeft: 20,
=======
                            alignItems:'center',
                            }}
                        colors={['#F8C471','#F5B041' ]}>
                            <View >
                            <TextInput style={{
                                            fontSize: 20,
                                            height: 55,
                                            width: 300,
                                            marginLeft: 50,
>>>>>>> 8cb616e06c662f738c1fc410c4d4f90c4e3de2fc
                                            marginTop: -5,
                                            borderRadius: 75,
                                            fontWeight: "900",
                                            color: '#ffffff'}}
<<<<<<< HEAD
                                            placeholder = "Confirm Password"
                                            secureTextEntry={isSecureEntry}
                                            onChangeText={(value) => {
                                                onChangeText({name: 'password', value});
                                            }}
                                            >
                            </TextInput>
                        </LinearGradient>
                </LinearGradient>
            </TouchableOpacity>
            <View style={{position:'absolute', marginTop: 140, right:17,}}>
                <TouchableOpacity

                    onPress={()=>{
                        setIsSecureEntry((prev)=> !prev)

                                }}>
                                <Feather name = {isSecureEntry ? 'eye-off':'eye'} size={20} color="black"/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity  onPress={UserRegister}>
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
                            <Text style={{
                                            fontSize: 23,
                                            height: 55,
                                            marginTop: 7,
                                            fontWeight: "900",
                                            color: 'white'}}
                                            
                                            >Get Registered
                            </Text>
                        </LinearGradient>
                </LinearGradient>
            </TouchableOpacity>
            
        </View>
        </LinearGradient>
        
        </View>
    );
};

export default UserRegistrationScreen;

=======
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
>>>>>>> 8cb616e06c662f738c1fc410c4d4f90c4e3de2fc
