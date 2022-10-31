import React, {useState} from "react";
import {Text, TouchableOpacity, View, Image} from 'react-native'
import BackgroundColor from "../components/Theme/BackgroundColor";
import * as ImagePicker from "expo-image-picker";
import UserProfilePic from "../components/UserProfilePic/UserProfilPic"
import BusinessButton from "../components/BusinessButtons/BusinessButton";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import CollectionsButton2 from "../components/UserButtons/CollectionsButton2";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ustyles from "./UScreens/UCreateScreens/UStyles";
import TipsButton from "../components/TipsButton/TipsButton";
import UserButtonScore from "../components/UserButtons/UserButtonUserScore";
import UserButtonFollowers from "../components/UserButtons/UserButtonFollowers";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";






const UHomeScreen2 = () => {
  
  const [image, setImage] = useState(null);
    
    
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


             <View style ={{
                height: '25%',
                width: '100%',
                marginLeft: '25%',
                backgroundColor:'transparent',
                marginTop:'5%',
                
               
               
                }}>
               <UserProfilePic />
               </View>

               <View style ={{
                position:'absolute',
                height:'15%',
                width: '10%',
                backgroundColor:'transparent',
                alignItems:'center',
                justifyContent:'space-between',
                marginLeft:'78%',
                marginTop:'20%',
                
                
                
               
           }}>
           
           <AntDesign name="setting" size={'30%'} color="white"/>
           <MaterialCommunityIcons name="progress-pencil" size={'30%'} color="white"/>
           <MaterialCommunityIcons name="message-badge-outline" size={'27%'} color="white"/>

           </View>
           <View style ={{
               height: heightPercentageToDP('10%'),
               width: widthPercentageToDP('100%'),
               flexDirection:"row",
               alignItems:"center",
               backgroundColor:'transparent',
               justifyContent: 'center'

               
           // User Nametag   
           }}> 
           
           <TouchableOpacity style={Ustyles.UBackgroundNameTag}>
               <LinearGradient
                               colors={['#F8C471','#F5B041']}
                               style={Ustyles.UForegroundNameTag}>
                                   <Text numberOfLines={2} style={Ustyles.UNameTageText}>Andre</Text>
                                       <Text numberOfLines={2} style={Ustyles.UNameTagLocationText}>Phoenix, AZ </Text>
               </LinearGradient>
              </TouchableOpacity>
           
           </View>
           <View style ={{
               height: heightPercentageToDP('10%'),
               width: widthPercentageToDP('100%'),
               flexDirection:"row",
               alignItems:"center",
               backgroundColor:'transparent',
               justifyContent: 'space-evenly'

               
// followers and score
           }}>
           <UserButtonFollowers text = '240' />  
           <UserButtonScore text='400'/>
           </View>
           <View style ={{
               height: heightPercentageToDP('10%'),
               width: widthPercentageToDP('100%'),
               flexDirection:"row",
               alignItems:"center",
               backgroundColor:'transparent',
               justifyContent: 'center'

               
           // Business Nametag   
           }}>
             <TipsButton/>
           </View>
           <View style ={{
               height: heightPercentageToDP('7%'),
               width: widthPercentageToDP('100%'),
               alignItems:"left",
               backgroundColor:'transparent',
               justifyContent: 'space-evenly'

               
// My collection text
           }}>
           <Text 
     // My collection Text 
         style= {{

           marginTop:0,
           marginLeft:35,
           fontWeight:'900',
           fontSize:25,
           color:'white',
           
         
         }}>
           
           My collection
         </Text>


           </View>
           <View style ={{
               height: heightPercentageToDP('25%'),
               width: widthPercentageToDP('100%'),
               alignItems:"left",
               backgroundColor:'transparent',
               justifyContent: 'space-evenly'

               
// My collection text
           }}>
           <ScrollView  horizontal= {true} showsHorizontalScrollIndicator={true} style={{
           
            }}>
           <CollectionsButton2/>
           <CollectionsButton2/>
           <CollectionsButton2/>


           </ScrollView>
           </View>
         

   </SafeAreaView>
</BackgroundColor>

   )};


export default UHomeScreen2;