import React, { useState, useEffect } from "react";
import {Text, FlatList, View, TouchableOpacity } from 'react-native'
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";



const CardEditScreen = () =>{

    const [company, setCompany] = useState();
    const [cardInfo, setCardInfo] = useState();
    const [user, setUser] = useState();
    const [companyToken, setCompanyToken] = useState();

    
    
    
    
    useEffect(  () =>{
          
        
        
        
        
        const getData = async () => {
        
            try {
                
                const userToken = await AsyncStorage.getItem('userToken');
                console.log(userToken);
                
                const userString = await AsyncStorage.getItem('user');
                const jsonUser = JSON.parse(userString);
                console.log(jsonUser);
                
                
                
            

                
              
            } catch(e) {
              // error reading value
            }
          }
          
          getData();
          
        }, [])
    
    
    
    
    
    
    
    
    
    
    
    useEffect(  () =>{
          
        const getCardInfo = async() =>{

          try{
            
            const userToken = await AsyncStorage.getItem("userToken");
            const config = {
              headers: {
                "Authorization" : `Bearer ${userToken}`
              }
            }

          const response = await axios.get(`http://localhost:8080/companies/${userToken}/cards`,config)
          if (response.status == 200){

            setCardInfo(response.data);
            console.log(cardInfo);

          }
          
          }
          
          
          catch (e) {
          
          console.log(e)


    }


  }
          
          getCardInfo();
          
        }, [])





    
    
    
    const UNavigation = useNavigation();


    const NextScreen = () =>{
        UNavigation.navigate("BCardCreation");
    }






    return(



        <View style ={{
            flex:1,
            

        }}>
        
        
        
        
        
        <View>
        <TouchableOpacity style={{
            alignSelf:"flex-end",
            alignItems:"center",
            justifyContent:"center",
            margin: 10
        }}onPress={NextScreen}>
        <Text>Create Card</Text>
        <EvilIcons name = "plus" size={30} color ="black"/>
        </TouchableOpacity>
        </View>


        
        
        
        
        
        
        </View>
    
    
    )



}

export default CardEditScreen;