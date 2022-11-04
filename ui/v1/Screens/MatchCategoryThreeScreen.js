import React, {useEffect, useState} from "react";
import {Text, View, FlatList} from 'react-native'
import Card from "../components/CardPost/Card";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MatchCategoryThreeScreen = () => {
    
    const [cardInfo, setCardInfo] = useState("");
    
    
    useEffect(  () =>{
          
        const getCardInfo = async() =>{

          try{
            
            const userToken = await AsyncStorage.getItem("userToken");
            const config = {
              headers: {
                "Authorization" : `Bearer ${userToken}`
              }
            }
          
          const response = await axios.get(`http://localhost:8080/cards?industry=retail&lat=33.4484&long=-112.0740`,config)
          
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
        <View style={{
            flex: 1, 
            alignItems:"center",
            justifyContent:"center"
        }}>
        
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={cardInfo}
        renderItem={({item}) => <Card card={item}/>}
        />
    </View>
    );
};

export default MatchCategoryThreeScreen;