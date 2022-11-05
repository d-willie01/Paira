import React, {useState, useEffect} from "react";
import {Text, TouchableOpacity, View, Image, SafeAreaView} from 'react-native'
import BackgroundColor from "../../components/Theme/BackgroundColor";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import BusinessProfilePic from "../../components/BusinessProfilePic/BusinessProfilePic";
import BusinessButton from "../../components/BusinessButtons/BusinessButton";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BusinessButton2 from "../../components/BusinessButtons/BusinessButton2"
import BSettingsScreen from "../Settings/BSettingsScreen";
import axios from "axios";

const BUserHomeScreen = () => {
    const UNavigation = useNavigation();
    const [image, setImage] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [name, setName] = useState("");


    



    
    useEffect(  () =>{
          
        const getUserInfo = async() =>{

          try{
            
            const userToken = await AsyncStorage.getItem("userToken");
            console.log(userToken);
            const config = {
              headers: {
                "Authorization" : `Bearer ${userToken}`
              }
            }

          const response = await axios.get('http://localhost:8080/users/self',config)
          if (response.status == 200){

            setUserInfo(response.data);
            setName(response.data.firstName)
            console.log(userInfo.company._id);


          }
          
          }
          
          
          catch (e) {
          
          console.log(e)


    }


  }
          
          getUserInfo();
    
    
    
    
        }, [])


  const goBSettingsScreen = () =>{
    UNavigation.navigate("BSettingsScreen")
  }
    
    



      


    
    
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
    




      const AddKeyWordsScreen = () =>{

          UNavigation.navigate("BAddKeysScreen");



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
                 marginTop:'2%',
                 justifyContent:'center'
                 
            }}>
            
                <BusinessProfilePic/>

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
            
            <TouchableOpacity onPress={goBSettingsScreen}>
            <AntDesign name="setting" size={'30%'} color="white"/>
            </TouchableOpacity>


            <TouchableOpacity>
            <MaterialCommunityIcons name="progress-pencil" size={'30%'} color="white"/>
            </TouchableOpacity>



            <TouchableOpacity>
            <MaterialCommunityIcons name="message-badge-outline" size={'27%'} color="white"/>
            </TouchableOpacity>

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
                                    borderRadius:'25%',}}>
                                    <Text numberOfLines={2} style={{
                                        fontSize:22,
                                        fontWeight:'900',
                                        color:'white',
                                        textAlign:'center',
                                        alignSelf:'center',
                                        fontStyle:'italic'
                                        }}>{name}</Text>
                                        <Text numberOfLines={2} style={{
                                        fontSize:'10%',
                                        fontWeight:'900',
                                        color:'white',
                                        textAlign:'center',
                                        alignSelf:'center',
                                        fontStyle:'italic',
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
                             backgroundColor:'#F39C12',}}
                             onPress={AddKeyWordsScreen}>
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