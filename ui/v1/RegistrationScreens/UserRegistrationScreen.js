import React, {useState} from "react";
import axios from "axios";
import {Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import BackgroundColor from "../components/Theme/BackgroundColor";
import { SafeAreaView } from "react-native";
import UserRegistrationButton from "../components/UserRegistrationButtons/UserRegistrationButton";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import NextButton from "../components/NextButton/NextButton";
//import { StateContext } from "./StateManagement/StateProvider";





const UserRegistrationScreen = () => {
    const UNavigation = useNavigation();

    
    
    
    
   
    
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
                console.log(userToken);
                await AsyncStorage.setItem("userToken", userToken);
                
                
                UNavigation.replace("Registration");
            }
            console.log(response);
                
    
                 } catch (e) {
            
             console.log(e.response.data)
             alert(JSON.stringify(e.response.data));
             
       
        }
        
    }
    
    
    
    
    
    
    
    
    
    

   const [isSecureEntry, setIsSecureEntry] = useState(true);
   const [firstName, onChangeFirstName] = useState('');
   const [lastName, onChangeLastName] = useState('');
   const [email, onChangeEmail] = useState('');
   const [password, onChangePassword] = useState("");
   const [passwordConfirmation, onChangeconfirmationPassword] = useState('');
   
    const testClick = () =>{
        console.log(passwordConfirmation)
    }

   
   
   
    return(
    
       

       
<BackgroundColor>
        <SafeAreaView 
       style={{
        height: heightPercentageToDP('100%'),
        width: widthPercentageToDP('100%') }}>
            
           
        
    
    
        <View 
               style ={{
                     height: '10%',
                     width: '100%',
                     backgroundColor:'transparent',
                     marginTop:'20%',
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
onPress={testClick}>
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
       
        placeholder ="First Name"
        secureTextEntry ={false}
        onChangeText={(value) => onChangeFirstName(value)}>
        

        </TextInput>
        </LinearGradient>
    
    </View>

</TouchableOpacity>
    
    
                </View>
               
                <View 
               style ={{
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
onPress={testClick}>
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

       
        secureTextEntry ={false}
        placeholder ="Last Name"
        onChangeText={(value) => onChangeLastName(value)}>
        

        </TextInput>
        </LinearGradient>
    
    </View>

</TouchableOpacity>
    
                </View>
                 
                <View 
               style ={{
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
onPress={testClick}>
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

        secureTextEntry ={false}
        placeholder ="Email"
        onChangeText={(value) => onChangeEmail(value)}>
        

        </TextInput>
        </LinearGradient>
    
    </View>

</TouchableOpacity>
    
    
                </View>
                
                <View 
               style ={{
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
                                onPress={testClick}>
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

                                        secureTextEntry ={isSecureEntry}
                                        placeholder ="Password"
                                        onChangeText={(value) => onChangePassword(value)}>
                                        

                                        </TextInput>
                                        </LinearGradient>
                                    
                                    </View>

                                </TouchableOpacity>
    
    
                </View>
               
                <View

               style ={{
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
onPress={testClick}>
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

         secureTextEntry ={isSecureEntry}
        placeholder ="Confirm Password"
        onChangeText={(value) => onChangeconfirmationPassword(value)}>
        
        

         </TextInput>


         
        </LinearGradient>

        
    
    </View>

</TouchableOpacity>
    
    
                </View>

                <View

               style ={{
                     height: '10%',
                     width: '100%',
                     backgroundColor:'transparent',
                     marginTop:'15%',
                     justifyContent:'center',
                     alignItems:'center',
                     
                }}>
                        
                 <NextButton onPress={RegisterUser}/>
    
    
                </View>
                    
    
    
            
    
    
        </SafeAreaView>
    </BackgroundColor>
           
            
        );
    };


export default UserRegistrationScreen;