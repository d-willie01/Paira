import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import styles from "./BCreateScreenStyles";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import MatchNowButton from "../../components/MatchNowButton/MatchNowButton";
import BackgroundColor from "../../components/Theme/BackgroundColor"
import BusinessCardPic from "../../components/BusinessCardPic/BusinessCardPic";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BCreateScreen = () => {
    
    //onChangeText={newText => setText(newText)}



    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [companyId, setCompanyId] = useState("");



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
                        setCompanyId(result);
                        console.log(companyId);
                            
    
                    }
    
                
                    
        
                     } catch (e) {
                            const createCardError = JSON.stringify(e.response.data);
                            console.log(e);
                            alert(createCardError);
                 
           
            }
            
        
  
  
      }
              
              getUserInfo();

            
        
        
},[])


const createCard = async() =>{
    const userToken = await AsyncStorage.getItem("userToken");

    const config = {
      headers: {
        "Authorization" : `Bearer ${userToken}`
      }
    }   
        
    try{
        
        const response = await axios.post(`http://localhost:8080/companies/${companyId}/cards`, {
                description,
                title

        },config)
        if(response.status == 201 ) {
            alert("Upload Success!")
            
        }
            

             } catch (e) {
        
         console.log(e)
         
         
   
    }
    
}

     return(
        
        <BackgroundColor>
        
        <SafeAreaView style ={{flex:1}}>

            <View style ={{
                height: 50, 
                justifyContent:"center",
                
                alignItems:"center",
                margin:5}}
                >
                <Text style ={styles.text}>Edit Your Card</Text>
                
            </View>

            <View style={{
                height:200, 
                width: 350, 
                
                alignSelf:"center",
                margin: 10,
                alignItems:"center",
                justifyContent:"center",
                borderRadius: 35}}>

                <BusinessCardPic/>
                    




            </View>


            <View style ={{
                height: 335,
                
                width: 350,
                alignSelf:"center",
                
            }}>


            <View style={{
                margin: 5,
                height:75,
               
            }}>
                <Text>Title:</Text>
                <TextInput style ={{
                    height:25,
                    borderWidth:1,
                    width: 200,
                    borderRadius: 10,
                    margin: 5
                }}
                onChangeText={(value) => {
                    setTitle(value);
                }}/>
                

            </View>




            <View style={{
                margin: 5,
                height:75,
                

            }}>
                <Text>Founded:</Text>
                <TextInput style ={{
                    height:25,
                    borderWidth:1,
                    width: 200,
                    borderRadius: 10,
                    margin: 5
                }}/>
                

            </View>






            <View style={{
                margin: 5,
                height:75,
                

            }}>
                <Text>Description:</Text>
                <TextInput style ={{
                    height:25,
                    borderWidth:1,
                    width: 200,
                    borderRadius: 10,
                    margin: 5
                }}
                onChangeText={(value) => {
                    setDescription(value);
                }}/>


                
                

            </View>





            <View style={{
                margin: 5,
                height:75,
                

            }}>
                <Text>Address:</Text>
                <TextInput style ={{
                    height:25,
                    
                    width: 200,
                    borderRadius: 10,
                    borderWidth:1,
                    margin: 5
                }}/>
                

            </View>






            </View>















                <MatchNowButton onPress={createCard}/>




        </SafeAreaView>

        </BackgroundColor>
    );
};

export default BCreateScreen;




 // const userString = await AsyncStorage.getItem('user')
        // const userToken = await AsyncStorage.getItem("userToken");
        // console.log(userToken);
        // console.log(userString);
        // const config = {
        //   headers: {
        //     "Authorization" : `Bearer ${userToken}`
        //   }
        // }