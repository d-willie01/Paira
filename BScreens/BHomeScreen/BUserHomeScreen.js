import React, {useState} from "react";
import {Text, TouchableOpacity, View, Image} from 'react-native'
import BackgroundColor from "../../components/Theme/BackgroundColor";
import * as ImagePicker from "expo-image-picker";
import BusinessProfilePic from "../../components/BusinessProfilePic/BusinessProfilePic";
import BusinessButton from "../../components/BusinessButtons/BusinessButton";
import { LinearGradient } from "expo-linear-gradient";

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


            <View style ={{
                marginLeft: 100,
                margin: 10
            }}>
                <BusinessProfilePic/>
            </View>

            <View style ={{
                height: 200,
                
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center"
                
                
            }}>
            
            <BusinessButton/>
            <BusinessButton/>

                

            </View>

            <View style = {{
                alignSelf:"center"
            }}>
            <TouchableOpacity style ={{
                             height:175,
                             width:300,
                             borderRadius:60,
                             marginRight: 10,
                             marginTop: 15,
                             alignItems: 'center',
                             bottom: 5,
                             backgroundColor:'#F39C12',}}>
                            <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{
                                    height:175,
                                    width:300,
                                    justifyContent:'center',
                                    borderRadius:60,}}>
                                <Text numberOfLines={3} style={{
                                fontSize:25,
                                fontWeight:'900',
                                color:'white',
                                textAlign:'center',
                                alignSelf:'center',
                                fontStyle:'italic'
                                }}>Add Keywords</Text>
                            </LinearGradient>
                            </TouchableOpacity>
            </View>

            




        </BackgroundColor>
    );
};

export default BUserHomeScreen;