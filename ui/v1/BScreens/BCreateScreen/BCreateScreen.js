import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import styles from "./BCreateScreenStyles";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import MatchNowButton from "../../components/MatchNowButton/MatchNowButton";
import BackgroundColor from "../../components/Theme/BackgroundColor"
import BusinessCardPic from "../../components/BusinessCardPic/BusinessCardPic";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CreateCardButton from "../../components/CreateCardButton/CreateCardButton";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";


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
        <SafeAreaView 
        style={{
        height: heightPercentageToDP('100%'),
        width: widthPercentageToDP('100%') }}>

            <View style ={{
                height:'8%',
                width:'70%',
                alignItems:"center",
                justifyContent:"center",
                backgroundColor:'transparent',
                marginTop:'1%',
                alignSelf:'center'
                }}>

            <Text numberOfLines={2} style={{
                 fontSize: '20%',
                 fontWeight: "900",
                 color: '#ffffff',
                 textAlign:'center',}}
            
            >Create a new card for your city to see! </Text>
                
            </View>

            
    
            <View 
        //Business Profile Pic
            style={{
                height: '50%',
                width: '100%',
                backgroundColor:'transparent',
                justifyContent:'center',
                alignItems:'center',
                marginTop:'-3%'
                }}>

                <BusinessCardPic/>
                    
            </View>


        <View style ={{
                height:'10%',
                width:'100%',
                alignItems:"center",
                justifyContent:"center",
                backgroundColor:'transparent',
                marginTop:'-5%'
               
            }}>
                <Text style={{
                    fontSize:'25%',
                    fontWeight:'800',
                    color:'white'
                }}
                
                >Title:</Text>
                <TextInput style ={{
                    height:'60%',
                    borderWidth:3,
                    width: '60%',
                    borderRadius: 10,
                    borderColor:'white'
                }}
                onChangeText={(value) => {
                    setTitle(value);
                }}/>
                
         </View>



            <View style={{
               height:'10%',
               width:'100%',
               alignItems:"center",
               justifyContent:"center",
               backgroundColor:'transparent',
               marginTop:'8%'
                

            }}>
                <Text
                style={{
                    fontSize:'25%',
                    fontWeight:'800',
                    color:'white'}}>
                    
                      Description: </Text>

                <TextInput style ={{
                    height:'100%',
                    borderWidth:3,
                    width: '80%',
                    borderRadius: 10,
                    borderColor:'white'
                }}
                onChangeText={(value) => {
                    setDescription(value);
                }}/>
                

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


                <CreateCardButton onPress={createCard}/>

      </View>




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