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
const UUserHomeScreen = () => {
    
     
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
                 height: heightPercentageToDP('25%'),
                 width: widthPercentageToDP('100%'),
                 marginTop:'10%',
                 justifyContent:'center',
                 alignItems:'center',
                backgroundColor:'transparent'
            }}>
                <BusinessProfilePic/>
            </View>
    </SafeAreaView>
</BackgroundColor>