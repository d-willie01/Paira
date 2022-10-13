import React from "react";
import {StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, StatusBar, Platform,} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import AddProfileButton from "../components/AddProfilePicButton";
import LinearGradientTO from "../components/LineargradientTO";
import CollectionButton from "../components/CollectionsButton";
import { ScrollView } from "react-native"
import { NavigationContainer } from "@react-navigation/native";



const UHomeScreen2 = () => {
    return(

<LinearGradient // background gradient view
      style={styles.container}
      colors={['#FDFEFE','#626567']}>
        
        <SafeAreaView>
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
                        fontWeight:"bold",
                        color:'white',
                        position:'absolute',
                        textAlign:'center',
                        alignSelf:'center'
                        }}>Add Your Interests</Text>
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
              marginTop:435,


             }} > 
              <CollectionButton/>
              <CollectionButton/>
              <CollectionButton/>
              </ScrollView>

              </SafeAreaView>
              
        </LinearGradient>
    );
    
};


export default UHomeScreen2;