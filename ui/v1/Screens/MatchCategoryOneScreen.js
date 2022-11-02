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


const MatchCategoryOneScreen = () => {
    

    const [cardInfo, setCardInfo] = useState();
    
    
    useEffect( () =>{

    
    
    
    const getLocation = async() =>{
        const {status} = await Permissions.askAsync(Permissions.Location);

        if (status != "granted"){
            console.log("Permission Denied")
        }
        else{
            const userLocation = await Location.getCurrentPositionAsync();
            console.log(userLocation);
                }       


             }
             
             
             getLocation()

        },[]);
    
    
    
    
    
    
    
    
    
    
    useEffect(  () =>{
          
        const getCardInfo = async() =>{

          try{
            
            const userToken = await AsyncStorage.getItem("userToken");
            const config = {
              headers: {
                "Authorization" : `Bearer ${userToken}`
              }
            }

          const response = await axios.get(`http://localhost:8080/cards?industry=food %26 dining`,config)
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
    
    
    
    
    
    return(

<LinearGradient // background gradient view
      style={styles.container}
      colors={['#B1B1B3','#CACACC',]}>
        <TouchableOpacity 
      //TIPS Button 
          style={{
              marginTop:115,
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
            marginTop:70,
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
        



       </View>

</LinearGradient>
    );
}; 

export default MatchCategoryOneScreen;


{/* <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={RestaurantData}
        renderItem={({item}) => <Card card={item}/>}
        /> */}