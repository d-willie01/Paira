import React from "react";
import {StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, StatusBar, Platform,} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import AddProfileButton from "../components/AddProfilePicButton";
import LinearGradientTO from "../components/LineargradientTO";
import CollectionButton from "../components/CollectionsButton";
import { ScrollView } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const UHomeScreen2 = () => {
    return(

<LinearGradient // background gradient view
      style={styles.container}
      colors={['#B1B1B3','#CACACC',]}>
        
        <SafeAreaView>
          <Text 
      // Tips Text 
          numberOfLines={1} style= {{
            position:'absolute',
            marginTop:315,
            marginLeft:34,
            fontWeight:'900',
            fontSize:25,
            color:'white',
          
          }}>
            
            Tips
          </Text>
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

          <LinearGradientTO/>
          <TouchableOpacity 
      //Interest Button 
          style={{
              marginTop:350,
              marginLeft:260,
              position:'absolute',
            }}

      //button function
            onPress={()=> console.log('yeee')}>
              
                <View
      //Button Style
                     style={styles.interestbuttonParent}>
                    <LinearGradient
                     colors={['#F5B041','#F8C471']}
                     style={styles.interestbuttongrad}>
                        <Text numberOfLines={3} style={{
                        fontSize:25,
                        fontWeight:'900',
                        color:'white',
                        position:'absolute',
                        textAlign:'center',
                        alignSelf:'center',
                        }}>Add Your Interests</Text>
                   </LinearGradient>
                </View>
             </TouchableOpacity>

             <TouchableOpacity 

      //Tip of the Day
          style={{
              marginTop:350,
              marginLeft:15,
              position:'absolute',
            }}

      //button function
            onPress={()=> console.log('yeee')}>
              
                <View
      //Button Style
                     style={styles.TipoftheDayParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.TipoftheDaygrad}>
                        <Text numberOfLines={3} style={{
                        fontSize:17,
                        fontWeight:'900',
                        color:'white',
                        textAlign:'center',
                        alignSelf:'center',
                        fontStyle:'italic'
                        }}>You can receive Paira crowns for inviting friends!</Text>
                   </LinearGradient>
                </View>
             </TouchableOpacity>


             <TouchableOpacity 
      //Profile Info
             style={{
              marginTop:100,
              marginLeft:225,
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
                        numberOfLines={1}
                        style={{
                        fontSize:18,
                        fontWeight:"bold",
                        color:'white',
                        textAlign:'left',
                        position:'absolute',
                        justifyContent:'flex-start',
                        marginTop:20,
                        marginLeft:5,
                        
                        }}>Breaben Bolton</Text>

                        <Text numberOfLines={2} 
                        style={{
                        fontSize:18,
                        fontWeight:"bold",
                        color:'white',
                        position:'absolute',
                        textAlign:'left',
                        marginTop:50,
                        marginLeft:5,
                        
                        }}>Homebase: Phoenix,AZ </Text>
                        <Text numberOfLines={1} 
                        style={{
                        fontSize:18,
                        fontWeight:"bold",
                        color:'white',
                        position:'absolute',
                        textAlign:'center',
                        marginTop:120,
                        marginLeft:43,
                        }}> 5 Friends </Text>
                   </LinearGradient>
                </View>
             </TouchableOpacity>
             
              <TouchableOpacity 
      //Add Profile Button
                style={{
                height: 100, 
                width: 100, 
                marginLeft:26,
                marginTop: 93, 
                borderRadius:80,
                width:160,
                height:160,

                position:"absolute",
                backgroundColor: "#F39C12"}}> 

              </TouchableOpacity>

             
             <ScrollView  horizontal= {true} style={{
              marginTop:460,


             }} > 
              <CollectionButton/>
              <CollectionButton/>
              <CollectionButton/>
              </ScrollView>
            
              </SafeAreaView>
            
          <Entypo name="light-bulb" size={22} color="white" 
          style={{
            position:'absolute',
            marginTop:319,
            marginLeft:90,
          }} />
          <MaterialIcons name="collections-bookmark" size={24} color="white" 
          style={{
            position:'absolute',
            marginTop:559,
            marginLeft:207,
          }}/>
          <Ionicons name="settings" size={24} color="white" style={{
            position:'absolute',
            marginTop:46,
            marginLeft:25,
          }} />
          <Ionicons name="md-notifications-sharp" size={24} color="white" style={{
            position:'absolute',
            marginTop:46,
            marginLeft:55,
          }}
          />
          <MaterialCommunityIcons name="page-layout-sidebar-left" size={24} color="white" style={{
            position:'absolute',
            marginTop:46,
            marginLeft:85,
          }}
          />
          <MaterialCommunityIcons name="crown" size={28} color="white" style={{
            position:'absolute',
            marginTop:260,
            marginLeft:130,
          }} 
          />
       
        <View 
    // Paira Score View
        style= {{
          position:'absolute',
          marginTop:250,
          marginLeft:30,
          height:50,
          width:100,
          backgroundColor:'transparent',
          justifyContent:'center',

        }}> 
          <Text style={{
          fontSize: 34,
          fontStyle:'italic',
          fontWeight:'900',
          textAlign:'right',
          color:'white'

        }}> 619 </Text> 
        
        </View>


        </LinearGradient>
    );
    
};


export default UHomeScreen2;