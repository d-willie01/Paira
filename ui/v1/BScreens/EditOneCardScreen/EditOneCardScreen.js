import React, {useState, useEffect} from "react";
import { Text, View, Button } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";




const EditOneCardScreen = (route, navigation) =>{

    
   const [cardID, setCardID] = useState();
   const [companyID, setCompanyID] = useState()


    
    


    useEffect(  () =>{
      
      const CardID = async() =>{
        const result = await AsyncStorage.getItem("cardId");
        console.log(result)
        setCardID(result);
    }

        CardID();
        
        
        
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
    
    
    
    
    
        
        const getCardInfo = async() =>{

          
          
          try{
            
            const userToken = await AsyncStorage.getItem("userToken");
            const config = {
              headers: {
                "Authorization" : `Bearer ${userToken}`
              }
            }

          const response = await axios.post(`http://localhost:8080/companies/${companyID}/cards/${cardID}`,config)
          if (response.status == 200){
            
            
            console.log(response);
            
            console.log("success!")
            
            

          }
          
          }
          
          
          catch (e) {
          
          console.log(e)


    }


  }
          
          
          
        
    
    
    
    
    
    
    
    
    
    
    
    return(
        <View>




        <Text>Hello World</Text>








        </View>
    )




}

export default EditOneCardScreen;