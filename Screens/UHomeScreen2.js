import React from "react";
import {StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, StatusBar, Platform,} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";


const UHomeScreen2 = () => {
    return(

<LinearGradient // background gradient view
      style={styles.container}
      colors={['#FDFEFE','#626567']}>
        
        <SafeAreaView>
          <Button
          title='Click Me' 
          color='orange'
          onPress={()=> console.log ("clicked")}/>
        
          <TouchableOpacity 

          //Interest Button
          style={{
              marginTop:400,
              marginLeft:210,
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
              marginTop:110,
              marginLeft:210,
              position:'absolute',
            }}

            //button function
            onPress={()=> console.log('yeee')}>
                <View
            //Paira Score Style
                     style={styles.interestbuttonParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.interestbuttongrad}>
                        <Text numberOfLines={3} style={{
                        fontSize:50,
                        fontWeight:"bold",
                        color:'white',
                        position:'absolute',
                        textAlign:'center',
                        alignSelf:'center'
                        }}>619p</Text>
                   </LinearGradient>
                </View>
             </TouchableOpacity>
             
              <TouchableOpacity style={{
                height: 100, 
                width: 100, 
                marginLeft:45,
                marginTop: 150, 
                borderRadius:80,
                width:160,
                height:160,

                position:"absolute",
                backgroundColor: "#F39C12"}}> 
              
              </TouchableOpacity>

              <View style={{
                height: 100, 
                width: 100, 
                marginTop:500,
                marginLeft:75,
                position:'absolute',
                backgroundColor: "#F39C12"}}> 
              
              </View>
              
              <View style={{
                height: 100, 
                width: 100, 
                marginTop:500,
                marginLeft:250,
                position:'absolute',
                backgroundColor: "#F39C12"}}> 
            
              </View>
              
              </SafeAreaView>
        </LinearGradient>
    );
};

export default UHomeScreen2;