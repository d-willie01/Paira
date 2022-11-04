import React, {useState, useEffect} from "react";
import { Text, View } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";




const EditOneCardScreen = (cardId) =>{

    
   const [cardInfo, setCardInfo] = useState();
   const [companyID, setCompanyID] = useState()





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
                            console.log(userResponse);
                            const result = userResponse.data.company._id;
                            
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

          const response = await axios.get(`http://localhost:8080/companies/${companyID}/cards/${cardId}`,config)
          if (response.status == 200){
            
            
            console.log(response.data);
            
            console.log("success!")
            setCardInfo(response.data);
            console.log(cardInfo.data);
            
            

          }
          
          }
          
          
          catch (e) {
          
          console.log(e)


    }


  }
          
          getCardInfo();
          
        }, [])
    
    
    
    
    
    
    
    
    
    
    
    
    return(
        <View>













        </View>
    )




}

export default EditOneCardScreen;