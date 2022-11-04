import React, {useEffect, useState} from "react";
import {Text, FlatList, View} from 'react-native'
import Card from "../components/CardPost/Card";
import RestaurantData from "../assets/Data/RestaurantData";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../components/CardPost/CardStyles";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MatchNowButton from '../components/MatchNowButton/MatchNowButton'


const MatchCategoryOneScreen = () => {
    

    const [cardInfo, setCardInfo] = useState();
    
    
    
    // useEffect( () =>{

    
    
    
  
    
    
    
    
    
          const getCardKeys = () =>{
            
                    const mockCardKeys = [ "mexican", "spicy","beer", "music"];
                    let cardKeysQueryString = "";
                    mockCardKeys.forEach(cardKey => cardKeysQueryString += `&cardKeys=${cardKey}`)
                    return cardKeysQueryString;
          }
          
    
    
    
    useEffect(  () =>{
          
        const getCardInfo = async() =>{

          try{
            
            const userToken = await AsyncStorage.getItem("userToken");
            const config = {
              headers: {
                "Authorization" : `Bearer ${userToken}`
              }
            }
          const cardKeys = getCardKeys();
          const response = await axios.get(`http://localhost:8080/cards?industry=food%20%26%20dining&lat=33.4484&long=-112.0740`,config)
          
          if (response.status == 200){
            console.log(response.data);
            setCardInfo(response.data);
            

          }
          
          }
          
          
          catch (e) {
          
          console.log(e)


    }


  }
          
          getCardInfo();
          
        }, [])


        
    
    
    
    
    
    return(

<LinearGradient // background gradient view
      style={styles.container}
      colors={['#B1B1B3','#CACACC',]}>
        <TouchableOpacity 
      //TIPS Button 
          style={{
              
              marginLeft:15,
              position:'absolute',
            }}

      //button function
            onPress={()=> console.log('yeee')}>
              
                <View
      //Button Style
                     style={styles.BCardBackgroundParent}>
                    <LinearGradient
                     colors={['#CACACC','#B1B1B3']}
                     style={styles.BCardBackgroundgrad}>
                   </LinearGradient>

                
                </View>
             </TouchableOpacity>

       <View>
        <Text numberOfLines={3} style={{
            fontSize:15,
            
            marginLeft:35,
            width:350,
            textAlign:'center',
            fontWeight:'900',
            color:'white',
            position:'absolute',
        }}
        >
         Here are some local food matches based on YOUR interests

        </Text>


        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={cardInfo}
        renderItem={({item}) => <Card card={item}/>}
        /> 
        

        <View>
          <MatchNowButton/>
        </View>



       </View>

</LinearGradient>
    );
}; 

export default MatchCategoryOneScreen;


   // // const getLocation = async() =>{
    // //     const {status} = await Permissions.askAsync(Permissions.LOCATION_BACKGROUND);

    // //     if (status != "granted"){
    // //         console.log("Permission Denied")
    // //     }
    // //     else{
    // //         const userLocation = await Location.getCurrentPositionAsync();
    // //         console.log(userLocation);
    // //             }       


    // //          }
             
             
    // //          getLocation()

    // //     },[]);