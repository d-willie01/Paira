import React, { useState, useContext } from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import {StateContext} from "../../StateManagement/StateProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import BackgroundColor from "../../components/Theme/BackgroundColor";
import MatchNowButton from "../../components/MatchNowButton/MatchNowButton";
import styles from "./RegistrationScreenStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";




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
      
      const response = await axios.post('http://localhost:8080/companies', {
                  name,
                  industry,
                  street_1,
                  street_2,
                  city,
                  state,
                  zipCode,

           },config)
      if(response.status == 201 ) {
          
        
        BusinessState();
        }
      console.log(response);
      } catch (e) {
      
       console.log(e)
      
 
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
        <SafeAreaView style={{flex:1}}>


        <View style ={{
          height:70,
          
          alignItems:"center",
          margin:5,
          justifyContent:"center"
        }}>

          <Text style={{
            
            fontSize: 25,
            fontWeight: "900",
            color: '#ffffff'
          }}>To complete a Business account,</Text>

        </View>


        <View style = {{
          height: 400,
          
        }}>


       
       <View style ={{
        height:85,
        
        flexDirection:"row"
        
       }}>
       
       
        <View style={{
                margin: 5,
                height:75,
               
            }}>
                <Text style={styles.text}>Title:</Text>
                <TextInput style ={styles.textInput1}
                    onChangeText={(value) => {
                      setName(value);
                  }}
              />
                

            
        </View>




        <View style={{
                margin: 5,
                height:75,
               
            }}>
                <Text style={styles.text}>Industry:</Text>
                <TextInput style ={styles.textInput1}
                onChangeText={(value) => {
                  setIndustry(value);
              }}/>
                

            
        </View>

        </View>


        <View style={{
                margin: 5,
                height:75,
               
            }}>
                <Text style={styles.text}>Address:</Text>
                <TextInput style ={styles.textInput2}
                onChangeText={(value) => {
                  setStreet1(value);
              }}/>
                

            
        </View>

        <View style={{
                margin: 5,
                height:75,
               
            }}>
                <Text style={styles.text}>Address Line 2:</Text>
                <TextInput style ={styles.textInput2}
                onChangeText={(value) => {
                  setStreet2(value);
              }}/>
                

            
        </View>


        <View style= {{
          height:100,
          
          flexDirection:"row"
        }}>


            <View style={{
                margin: 5,
                height:75,
               
            }}>
                <Text style={styles.text}>City:</Text>
                <TextInput style ={styles.textInput1}
                onChangeText={(value) => {
                  setCity(value);
              }}/>
                

            
              </View>


              <View style={{
                margin: 5,
                height:75,
               
            }}>
                <Text style={styles.text}>State:</Text>
                <TextInput style ={styles.textInput3}
                onChangeText={(value) => {
                  setState(value);
              }}/>
                

            
              </View>




              <View style={{
                margin: 5,
                height:75,
               
            }}>
                <Text style={styles.text}>Zip code:</Text>
                <TextInput style ={styles.textInput3}
                onChangeText={(value) => {
                  setZipCode(value);
              }}/>
                

            
              </View>

              


        </View>





        




            
            
            
            
            <View style={{alignSelf:"center"}}>
            
            <MatchNowButton text="Submit Business" onPress={SubmitBusinessCard}/>

            </View>
            
            
            </View>


            <View style={{alignSelf:"center"}}>
              <Text style ={{
                fontSize: 35,
                fontWeight: "900",
                color: '#ffffff'}}>OR</Text>
            
            
            </View>




            
                <View style={{
                  height: 175,
                  
                  alignItems:"center",
                  justifyContent:"center"
                  

                }}>      
                
                <MatchNowButton text= "Submit as User" onPress={UserScreen}/>

                </View>
              
                
                </SafeAreaView>
                
                
                
      </BackgroundColor>
        
   
   
      
 
      
    );
};

export default RegistrationScreen;