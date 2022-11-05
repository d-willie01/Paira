import React, { useState, useEffect } from "react";
import {Text, FlatList, View, TouchableOpacity, SafeAreaView, RefreshControl, ScrollView } from 'react-native'

import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Card from "../../components/CardPost/BCard/BCard";
import BackgroundColor from "../../components/Theme/BackgroundColor";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";



const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const CardEditScreen = (navigation) =>{

    const [refreshing, setRefreshing] = useState(false);
    
    const [cardInfo, setCardInfo] = useState();
   
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
          
        }, [refreshing])
    
    
    
    
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
          
        }, [refreshing])





    
    
    
    const UNavigation = useNavigation();


    const NextScreen = () =>{
        UNavigation.navigate("BCardCreation");
    }

    

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(5).then(() => setRefreshing(false));
    }, []);
  


    return(

    <BackgroundColor>


<SafeAreaView 
       style={{
        height: heightPercentageToDP('100%')}}>

          <ScrollView style ={{flex:1}}

          refreshControl={
          
          <RefreshControl 
          refreshing={refreshing}
          onRefresh ={onRefresh}
        />

          }
          >
            
            
            

        
        <TouchableOpacity style={{
          width:'100%',
          height:'3%',
          flexDirection:'row',
            backgroundColor:'transparent',
            alignItems:"center",
            justifyContent:"flex-end",
            paddingRight:2,
            
            
            }}onPress={NextScreen}>
        
        <Text style ={{

          color:'black',
          fontSize:'13%'}}>Create a New Card</Text>
        
        <EvilIcons name = "plus" size={'20%'} color ="black"/>
        </TouchableOpacity>
    


        
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={cardInfo}
                renderItem={({item}) => <Card card={item}/>}
            />
        
        
        <View>

        </View>
        
        
        </ScrollView>
        
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