import React, { useState, useContext } from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import {StateContext} from "../../StateManagement/StateProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import BackgroundColor from "../../components/Theme/BackgroundColor";
import MatchNowButton from "../../components/MatchNowButton/MatchNowButton";
import styles from "./RegistrationScreenStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";






const RegistrationScreen = () => {


const {BusinessState, UserState} = useContext(StateContext);


const UserScreen = () =>{
  UserState();
}


const SubmitBusinessCard = async() =>{
        
      try{
      
      const userToken = await AsyncStorage.getItem("userToken");

      const config = {
        headers: {
          "Authorization" : `Bearer ${userToken}`
        }
      }
      
      const createCompanyRequestBody = {
        name,
        industry,
        street_1,
        street_2,
        city,
        state,
        zipCode,

 }
      console.log(createCompanyRequestBody);
      const response = await axios.post('http://localhost:8080/companies',createCompanyRequestBody,config)
      if(response.status == 201 ) {
        
        console.log(response);
        
        BusinessState();
        }
      console.log(response);
      } catch (e) {
      
       console.log(e);
       alert(JSON.stringify(e.response.data));
      
 
  }
  
}
    
    const [name, setName] = useState("");
    const [industry, setIndustry] = useState("");
    const [street_1, setStreet1] = useState("");
    const [street_2, setStreet2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    

  

    return(


    
    
    
      <BackgroundColor>
         <SafeAreaView 
       style={{
        height: heightPercentageToDP('100%'),
        width: widthPercentageToDP('100%') }}>


        <View style ={{
          height:'10%',
          width:'100%',
          alignItems:"center",
          justifyContent:"center",
          marginTop:'5%'
        }}>

          <Text style={{
            fontSize: '20%',
            fontWeight: "900",
            color: '#ffffff',
            textAlign:'center',
          }}>Complete an Organization account...</Text>
          
          
          
          
        <View style ={{borderWidth:1}}>
          

        </View>

        </View>


  <View style ={{
        height:'10%',
        flexDirection:"row",
        backgroundColor:'transparent',
        justifyContent:'center',
        justifyContent:'space-evenly'
        
       }}>
       
       
        <View style={{
                height:'100%',
                backgroundColor:'transparent'
               
            }}>
                <Text style={styles.text}>Title:</Text>
                <TextInput style ={styles.textInput1}
                    onChangeText={(value) => {
                      setName(value);
                  }}
              />
                

            
        </View>

        <View style={{
                height:'100%',
                backgroundColor:'transparent'
               
            }}>
                <Text style={styles.text}>Industry:</Text>
                <TextInput style ={styles.textInput1}
                onChangeText={(value) => {
                  setIndustry(value);
              }}/>
                

            
        </View>

  </View>


      <View style={{
               height:'10%',
               width:'100%',
               backgroundColor:'transparent',
               alignItems:'center',
               
               
               
               
            }}>
                <Text style={styles.text}>Address:</Text>
                <TextInput style ={styles.textInput2}
                onChangeText={(value) => {
                  setStreet1(value);
              }}/>
                

            
        </View>

        <View style={{
               height:'10%',
               width:'100%',
               backgroundColor:'transparent',
               alignItems:'center',
               
            }}>
                <Text style={styles.text}>Address Line 2:</Text>
                <TextInput style ={styles.textInput2}
                onChangeText={(value) => {
                  setStreet2(value);
              }}/>
                

            
        </View>


        <View style= {{
          height:'10%',
          flexDirection:"row",
          backgroundColor:'transparent',
          justifyContent:'center',
          justifyContent:'space-evenly'
        }}>


            <View style={{
               height:'100%',
               backgroundColor:'transparent'
               
            }}>
                <Text style={styles.text}>City:</Text>
                <TextInput style ={styles.textInput1}
                onChangeText={(value) => {
                  setCity(value);
              }}/>
                

            
              </View>


              <View style={{
                height:'100%',
                backgroundColor:'transparent'
               
            }}>
                <Text style={styles.text}>State:</Text>
                <TextInput style ={styles.textInput3}
                onChangeText={(value) => {
                  setState(value);
              }}/>
                

            
              </View>




              <View style={{
                height:'100%',
                backgroundColor:'transparent'
               
            }}>
                <Text style={styles.text}>Zip code:</Text>
                <TextInput style ={styles.textInput3}
                onChangeText={(value) => {
                  setZipCode(value);
              }}/>
                

            
              </View>

              


        </View>





        




            
            
            
            
            <View style={{
                     height: '10%',
                     width: '100%',
                     backgroundColor:'transparent',
                     marginTop:'10%',
                     justifyContent:'center',
                     alignItems:'center',
                     }}>
            
            <MatchNowButton text="Create Organization" onPress={SubmitBusinessCard}/>

            </View>
            
            
            


         <View style={{height:'10%',
                width:'100%',
                alignItems:"center",
                justifyContent:"center"}}>
                <Text 
                style ={{
                  fontSize: '30%',
                  fontWeight: "900",
                  color: '#ffffff',
                  textAlign:'center',}}>
                
                OR </Text>
            
            
            </View>




            
                <View style={{
                   height: '10%',
                   width: '100%',
                   backgroundColor:'transparent',
                   justifyContent:'center',
                   alignItems:'center',
                  

                }}>      
                
                <MatchNowButton text= "Create User" onPress={UserScreen}/>

                </View>
              
                
                </SafeAreaView>
                
                
                
      </BackgroundColor>
        
   
   
      
 
      
    );
};

export default RegistrationScreen;