import React, {useState} from "react";
import {Text, TouchableOpacity, View, Image} from 'react-native'
import BackgroundColor from "../../components/Theme/BackgroundColor";
import * as ImagePicker from "expo-image-picker";
import BusinessProfilePic from "../../components/BusinessProfilePic/BusinessProfilePic";
import BusinessButton from "../../components/BusinessButtons/BusinessButton";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import BusinessButton2 from "../../components/BusinessButtons/BusinessButton2";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const BUserHomeScreen = () => {
    
     
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
                 backgroundColor:'transparent',
                 marginTop:'5%'
                 
                
                
            }}>
                
                <BusinessProfilePic/>

                <View style ={{
                 position:'absolute',
                 height:'70%',
                 width: '10%',
                 backgroundColor:'transparent',
                 alignItems:'center',
                 justifyContent:'space-between',
                 marginLeft:'78%',
                 marginTop:'5%',
                 
                 
                 
                
            }}>
            
            <AntDesign name="setting" size={'30%'} color="white"/>
            <MaterialCommunityIcons name="progress-pencil" size={'30%'} color="white"/>
            <MaterialCommunityIcons name="message-badge-outline" size={'27%'} color="white"/>

            </View>
                
                
            </View>

           

           

            <View style ={{
                height: heightPercentageToDP('15%'),
                width: widthPercentageToDP('100%'),
                flexDirection:"row",
                alignItems:"center",
                backgroundColor:'transparent',
                justifyContent: 'center'

                
            // Business Nametag   
            }}> 
            
            <TouchableOpacity style={{
                height:'60%',
                width:'60%',
                borderRadius:'25%',
                backgroundColor:'#F39C12',
                justifyContent:'center',
                }}>
                <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{
                                    height:'100%',
                                    width:'100%',
                                    justifyContent:'center',
                                    bottom:5,
                                    borderRadius:'20%',}}>
                                    <Text numberOfLines={2} style={{
                                        fontSize:22,
                                        fontWeight:'900',
                                        color:'white',
                                        textAlign:'center',
                                        alignSelf:'center',
                                        fontStyle:'italic'
                                        }}>Suns Event Co.</Text>
                                        <Text numberOfLines={2} style={{
                                        fontSize:10,
                                        fontWeight:'900',
                                        color:'white',
                                        textAlign:'center',
                                        alignSelf:'center',
                                        fontStyle:'italic'
                                        }}>Phoenix, AZ </Text>
                </LinearGradient>

            </TouchableOpacity>
            
            </View>

            <View style ={{
                height: heightPercentageToDP('20%'),
                width: widthPercentageToDP('100%'),
                flexDirection:"row",
                alignItems:"center",
                backgroundColor:'transparent',
                justifyContent: 'space-evenly'

                
// Business Analytics
            }}>

            <BusinessButton/>  
            <BusinessButton2/>
  

            </View>

            <View style = {{
                height: heightPercentageToDP('20%'),
                width: widthPercentageToDP('100%'),
                backgroundColor:'transparent',
                justifyContent:'center',
                alignItems:'center',
            }}>
            <TouchableOpacity style ={{
                             height:'70%',
                             width:'70%',
                             borderRadius:35,
                             alignItems: 'center',
                             backgroundColor:'#F39C12',}}>
                            <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{
                                    height:'100%',
                                    width:'100%',
                                    justifyContent:'center',
                                    bottom:5,
                                    borderRadius:35,}}>
                                <Text numberOfLines={2} style={{
                                fontSize:22,
                                fontWeight:'900',
                                color:'white',
                                textAlign:'center',
                                alignSelf:'center',
                                fontStyle:'italic'
                                }}>Click here to add your keywords</Text>
                            </LinearGradient>
                            </TouchableOpacity>
            </View>

            


    </SafeAreaView>

 </BackgroundColor>
    );
};

export default BUserHomeScreen;