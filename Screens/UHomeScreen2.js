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
           <CollectionsButton2/>
           <CollectionsButton2/>
           <CollectionsButton2/>


           </ScrollView>
           </View>
         

   </SafeAreaView>
</BackgroundColor>

   )};


export default UHomeScreen2;