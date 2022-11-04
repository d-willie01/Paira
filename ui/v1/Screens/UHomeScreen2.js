import React, {useState, useEffect, useContext} from "react";
import {Text, View, Image, SafeAreaView, TouchableOpacity, Platform, FlatList,} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import BackgroundColor from "../components/Theme/BackgroundColor";
import TipsButton from "../components/TipsButton/TipsButton";
import NameTagButton from "../components/ProfileInfoButtons/NameTag/NameTagButton";
import SocialButton from "../components/ProfileInfoButtons/Social/SocialButton";
import SocialButton2 from "../components/ProfileInfoButtons/Social/SocialButton2";







const UHomeScreen2 = () => {
  
  const [image, setImage] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const UNavigation = useNavigation(); 



    useEffect(  () =>{
          
          const getUserInfo = async() =>{

            try{
              
              const userToken = await AsyncStorage.getItem("userToken");
              const config = {
                headers: {
                  "Authorization" : `Bearer ${userToken}`
                }
              }

            const response = await axios.get('http://localhost:8080/users/self',config)
            if (response.status == 200){

              setUserInfo(response.data);
              console.log(userInfo);

            }
            
            }
            
            
            catch (e) {
            
            console.log(e)


      }


    }
            
            getUserInfo();
            if (Platform.OS != "web"){
              const { status }  = ImagePicker.requestMediaLibraryPermissionsAsync();
              if (status != "granted"){
                console.log("Permission denied!");
              }
              
            }
          }, [])

        useEffect( () =>{

          
          
          console.log(userInfo);





        },[userInfo])
  
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

      const AchievementsScreen = () =>{
        UNavigation.navigate("AchievementsScreen");
      }

      const FriendsScreen = () =>{
        UNavigation.navigate("FriendsScreen");
      }




  
  return(

<BackgroundColor>
        
        <SafeAreaView>
          
          <Text 
      // My collection Text 
          numberOfLines={1} style= {{
            position:'absolute',
            marginTop:555,
            marginLeft:35,
            fontWeight:'900',
            fontSize:25,
            color:'white',
            
          
          }}>
            
            My Likes
          </Text>
         
          <View style = {{
            position: "absolute",
            marginTop: 450
          }}>

         <TipsButton/>
         
         </View>


        




             <View style={{
              position:"absolute",
              marginTop:315,
              marginLeft: 125,
             }}>
              <NameTagButton text={userInfo?.firstName ?? ""}/>
             </View>
             
             <View style={{
              marginTop: 380,
              marginLeft:50,
              position: "absolute"
             }}>
              <SocialButton onPress={AchievementsScreen} text ="245"/>
             </View>

            <View style={{
              position:"absolute",
              marginTop:380,
              marginLeft: 225
            }}>
              <SocialButton2 onPress={FriendsScreen}/>
            </View>


              <TouchableOpacity 
      //Add Profile Button
                style={{
                height: 205, 
                width: 205,
                marginLeft:110,
                marginTop: 95, 
                borderRadius:100,
                position:"absolute",
                justifyContent:'center',
                backgroundColor: "#F39C12"}}

                onPress={PickProfilePic}>

                  {image && <Image source ={{uri:image}} style={{
                    height : 200,
                    width : 200,
                    borderRadius:100,
                    alignSelf:'center',
                    

                  }} />}

              </TouchableOpacity>

             
             <FlatList/>
            
              
            
          
          <MaterialIcons name="collections-bookmark" size={24} color="white" 
          style={{
            position:'absolute',
            marginTop:559,
            marginLeft:207,
          }}/>
          <Ionicons name="settings" size={26} color="white" style={{
            position:'absolute',
            marginTop:60,
            marginLeft:56,
          }} />
          <Ionicons name="md-notifications-sharp" size={26} color="white" style={{
            position:'absolute',
            marginTop:60,
            marginLeft:90,
          }}
          />
          <MaterialCommunityIcons name="page-layout-sidebar-left" size={26} color="white" style={{
            position:'absolute',
            marginTop:60,
            marginLeft:122,
          }}
          />
          <Feather name="info" size={18} color="white" style={{
            position:"absolute",
            marginTop:355,
            marginLeft:80,
          }} />





       
        <Text 
      // Welcome Text 
          numberOfLines={1} style= {{
            position:'absolute',
            marginTop:55,
            marginLeft:159,
            fontWeight:'900',
            fontSize:28,
            color:'white',
            fontStyle:'italic'
          
          }}> Welcome Back
            
             
          </Text>
          
          <Text 
      // Welcome Text 
          numberOfLines={1} style= {{
            position:'absolute',
            marginTop:318,
            marginLeft:25,
            fontWeight:'900',
            fontSize:25,
            color:'white',        
          }}>  
             
          </Text>
          </SafeAreaView>

      </BackgroundColor>
    );
    
};


export default UHomeScreen2;