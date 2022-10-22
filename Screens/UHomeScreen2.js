import React, {useState, useEffect} from "react";
import {Text, View, Image, SafeAreaView, TouchableOpacity, Platform,} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import CollectionButton from "../components/CollectionsButton";
import { ScrollView } from "react-native"
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import BackgroundColor from "../components/Theme/BackgroundColor";
import TipsButton from "../components/TipsButton/TipsButton";





const UHomeScreen2 = () => {
  
  const [image, setImage] = useState(null);
  


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
        
        <SafeAreaView>
          
          <Text 
      // Tips Text 
          numberOfLines={1} style= {{
            position:'absolute',
            marginTop:555,
            marginLeft:35,
            fontWeight:'900',
            fontSize:25,
            color:'white',
            
          
          }}>
            
            My collection
          </Text>
         
          <View style = {{
            position: "absolute",
            marginTop: 500
          }}>
         <TipsButton/>
         </View>




             <TouchableOpacity 
      //Profile Info
             style={{
              marginTop:325,
              marginLeft:130,
              position:'absolute',
            }}

        //button function
            onPress={()=> console.log('yeee')}>
                <View
        //Profile Info Style
                     style={styles.profileinfoParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.profileinfograd}>
                        <Text
        //Text Inside of Profile info
                        numberOfLines={2}
                        style={{
                        fontSize:18,
                        fontWeight:"900",
                        color:'white',
                        textAlign:'center',
                        position:'absolute',
                        alignContent:'center',
                        marginTop:13,
                        marginLeft:10,
                        
                        }}>Breaben Bolton </Text>
                        <Text
        //Text Inside of Profile info
                        numberOfLines={2}
                        style={{
                        fontSize:10,
                        fontWeight:"700",
                        color:'white',
                        textAlign:'center',
                        position:'absolute',
                        marginTop:35,
                        marginLeft:50,
                        
                        }}>Phoenix, AZ </Text>
                        
                   </LinearGradient>
                </View>
             </TouchableOpacity>
             
             <TouchableOpacity 
      //Profile Info
             style={{
              marginTop:400,
              marginLeft:60,
              position:'absolute',
            }}

        //button function
            onPress={()=> console.log('yeee')}>
                <View
        //Profile Info Style
                     style={styles.PairaScoreParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.PairaScoregrad}>
                        <Text
        //Text Inside of Profile info
                        numberOfLines={1}
                        style={{
                        fontSize:33,
                        fontWeight:"900",
                        color:'white',
                        textAlign:'center',
                        position:'absolute',
                        marginTop:8,
                        marginLeft:20,
                        fontStyle:'italic',
                        
                        }}>619</Text>

              <MaterialCommunityIcons name="crown" size={37} color="white" style={{
                position:'absolute',
                marginTop:8,
                marginLeft:94,}}>
              </MaterialCommunityIcons>



                    </LinearGradient>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
      //UserLocation TO
             style={{
              marginTop:400,
              marginLeft:220,
              position:'absolute',
            }}

        //button function
            onPress={()=> console.log('yeee')}>
                <View
        //Profile Info Style
                     style={styles.UserLocationParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.UserLocationgrad}>
                        <Text
        //Text Inside of Profile info
                        numberOfLines={1}
                        style={{
                        fontSize:33,
                        fontWeight:"900",
                        color:'white',
                        textAlign:'center',
                        position:'absolute',
                        marginTop:8, 
                        marginLeft:26,
                        
                        }}>23 </Text>

                    <FontAwesome5 name="user-friends" size={29} color="white" style={{
                      position:'absolute',
                      marginLeft: 85,
                      marginTop:12,
                    }} />



                    </LinearGradient>
                </View>
            </TouchableOpacity>


              <TouchableOpacity 
      //Add Profile Button
                style={{
                height: 205, 
                width: 205,
                marginLeft:112,
                marginTop: 105, 
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

             
             <ScrollView  horizontal= {true} showsHorizontalScrollIndicator={false} style={{
              marginTop:460,
              


             }} > 
              <CollectionButton/>
              <AntDesign name="pluscircleo" size={24} color="grey" style={{
                position:'absolute',
                marginTop:183,
                marginLeft:81,
              }}/> 
              <AntDesign name="pluscircleo" size={24} color="grey" style={{
                position:'absolute',
                marginTop:183,
                marginLeft:250,
              }}/> 
              <AntDesign name="pluscircleo" size={24} color="grey" style={{
                position:'absolute',
                marginTop:183,
                marginLeft:425,
              }}/> 

              <CollectionButton/>
              <CollectionButton/>
              </ScrollView>
            
              </SafeAreaView>
            
          
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
            marginTop:375,
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


      </BackgroundColor>
    );
    
};


export default UHomeScreen2;