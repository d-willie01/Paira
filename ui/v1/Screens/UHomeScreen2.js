import React, {useState, useEffect, useContext} from "react";
import {Text, View, Image, SafeAreaView, TouchableOpacity, Platform,} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import CollectionButton from "../components/CollectionsButton";
import { ScrollView } from "react-native"
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import BackgroundColor from "../components/Theme/BackgroundColor";
import TipsButton from "../components/TipsButton/TipsButton";
import NameTagButton from "../components/ProfileInfoButtons/NameTag/NameTagButton";
import SocialButton from "../components/ProfileInfoButtons/Social/SocialButton";
import SocialButton2 from "../components/ProfileInfoButtons/Social/SocialButton2";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import UserProfilePic from "../components/UserProfilePic/UserProfilePic";
import UserButtonFollowers from "../components/UserButtons/UserButtonFollowers";
import UserButtonScore from "../components/UserButtons/UserButtonScore";









const UHomeScreen2 = () => {
  
  const [image, setImage] = useState(null);
  const [userInfo, setUserInfo] = useState(null);




   

    useEffect( async() =>{
        

    
        
        try{
        
                const userToken = await AsyncStorage.getItem("userToken");
                const config = {
                  headers: {
                    "Authorization" : `Bearer ${userToken}`
                  }
                }
        
              const response = await axios.get('http://localhost:8080/users/self',config)
              if (response.status == 200){
    
                setUserInfo(JSON.stringify(response.data));
                console.log(userInfo);
    
              }
              
              }
              
              
              catch (e) {
              
              console.log(e)
        
    
        }
    
    
      
    },[])
  
   
  


  useEffect(  () =>{
    if (Platform.OS != "web"){
      const { status }  = ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status != "granted"){
        console.log("Permission denied!");
      }
      
    }
  }, [])
  
  const PickProfilePic = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect : [2,2],
      quality: 1
    })
    console.log(result)
    if (!result.cancelled){
      setImage(result.uri)
    }
  }
  
  return(

<BackgroundColor>
  <SafeAreaView 
  style={{
   height: heightPercentageToDP('100%'),
   width: widthPercentageToDP('100%') }}>


      <View 
           style ={{
                 height: '25%',
                 width: '100%',
                 backgroundColor:'transparent',
                 marginTop:'4%',
                 
            }}>
            
                <UserProfilePic/>

            <View // View for Lil Buttons
                
                style ={{
                 position:'absolute',
                 height:'75%',
                 width: '1%',
                 opacity:'100%',
                 backgroundColor:'#575757',
                 borderRadius:'100%',
                 alignItems:'center',
                 justifyContent:'space-evenly',
                 marginLeft:'78%',
                 marginTop:'5%',
                 
                 
                 
                
            }}>
            
            <AntDesign name="setting" size={'30%'} color="white"/>
            <MaterialCommunityIcons name="progress-pencil" size={'30%'} color="white"/>
            <MaterialCommunityIcons name="message-badge-outline" size={'27%'} color="white"/>

            </View>
                
                
        </View>
           
           <View style ={{
               height: heightPercentageToDP('10%'),
               width: widthPercentageToDP('100%'),
               flexDirection:"row",
               alignItems:"center",
               backgroundColor:'transparent',
               justifyContent: 'center',
               marginTop:'-4%'

               
           // User Nametag   
           }}> 
           
           
           </View>
          
           <View style ={{
               height: heightPercentageToDP('10%'),
               width: widthPercentageToDP('100%'),
               flexDirection:"row",
               alignItems:"center",
               backgroundColor:'transparent',
               justifyContent: 'space-evenly',

               
// followers and score
           }}>

            <UserButtonFollowers/>
            <UserButtonScore/>

           </View>
           
           
           <View style ={{
               height: heightPercentageToDP('10%'),
               width: widthPercentageToDP('100%'),
               flexDirection:"row",
               backgroundColor:'transparent',
               justifyContent: 'center',
               alignItems:'center',
               marginTop:'1%',
               
               
               
               
           // Business Nametag   
           }}>
             
             <TipsButton/>
           </View>
           
           <View style ={{
               height: heightPercentageToDP('3%'),
               width: widthPercentageToDP('100%'),
               backgroundColor:'transparent',
               
               

               
// My collection text
           }}>
           <Text 
     // My collection Text 
         style= {{
           fontStyle:'italic',
           alignSelf:'center',
           fontWeight:'900',
           fontSize:'19%',
           color:'white',
         
         }}>
           
           My collections
         </Text>
         

           </View>
           <View style ={{
               height: heightPercentageToDP('25%'),
               width: widthPercentageToDP('100%'),
               alignItems:'center',
               backgroundColor:'transparent',
               justifyContent: 'space-evenly',
               marginTop:'-1%', 

               
// My collection text
           }}>
           <ScrollView  horizontal= {true} showsHorizontalScrollIndicator={false} style={{
           
            }}>
           


           </ScrollView>
           </View>
         

   </SafeAreaView>
</BackgroundColor>
    );
    
};


export default UHomeScreen2;