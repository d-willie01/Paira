import React, { useState, useEffect } from "react";
import {Text, FlatList, View, TouchableOpacity, SafeAreaView } from 'react-native'

import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Card from "../../components/CardPost/BCard/BCard";
import BackgroundColor from "../../components/Theme/BackgroundColor";




const CardEditScreen = () =>{

    const [company, setCompany] = useState();
    const [cardInfo, setCardInfo] = useState();
    const [userInfo, setUserInfo] = useState();
    const [companyID, setCompanyID] = useState("");

    
    
    
    
    useEffect(  () =>{
          
        
        
        
        const getUserInfo = async() =>{
        
        
        
        
            try{
                
                
                
                    const userToken = await AsyncStorage.getItem("userToken");
                    const userResponse = await axios.get("http://localhost:8080/users/self",{
                        headers: {
                          "Authorization" : `Bearer ${userToken}`
                        }
                      })
                    if (userResponse.status == 200){
                        
                            const result = userResponse.data.company._id;
                            console.log(userResponse.data.company._id);
                            setCompanyID(result);
                            
    
                    }
    
                
                    
        
                     } catch (e) {
                            const loginError = JSON.stringify(e.response.data);
                            console.log(e);
                            alert(loginError);
                 
           
            }
            
        }
        getUserInfo();
          
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

          const response = await axios.get(`http://localhost:8080/companies/${companyID}/cards`,config)
          if (response.status == 200){
            console.log("success!");
            setCardInfo(response.data);
            console.log(cardInfo);
            console.log(cardInfo.description);
            

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

        <BackgroundColor>


        <SafeAreaView style ={{
            flex:1,
            
}}>
            
            



            <View>
        <TouchableOpacity style={{
            alignSelf:"flex-end",
            alignItems:"center",
            justifyContent:"center",
            
        }}onPress={NextScreen}>
        <Text style ={{fontSize:15}}>Create Card</Text>
        
        <EvilIcons name = "plus" size={30} color ="black"/>
        </TouchableOpacity>
        </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={cardInfo}
                renderItem={({item}) => <Card card={item}/>}
            />
        
        
        
        
        
        

        

        
        
        <View>

        </View>
        
        
        
        
        </SafeAreaView>
        </BackgroundColor>
    
    )



}

export default CardEditScreen;

{/* <FlatList
        data={cardInfo}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}









      //Darius Williams Breaben Bolton