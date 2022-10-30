import React, { useState, useContext } from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform, Image, Button } from 'react-native';
import {StateContext} from "../StateManagement/StateProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../Styles/styles";
import { LinearGradient } from "expo-linear-gradient";
import RegistrationStyles from "./RegistrationScreenStyles";




const RegistrationScreen = () => {


const {BusinessState, UserState} = useContext(StateContext);
    

  

    return(


    
    <View style={{flex:1}}>
    <LinearGradient // background gradient view
        style={styles.container}
        
        colors={['#B1B1B3','#CACACC',]}>
          <View style={{alignItems: 'center'}}>
            <Text style ={{fontWeight:'900', color: 'white', fontSize: 20, marginTop: 320, marginBottom: 20, fontStyle: "italic"}}> Be discovered... </Text>
            <TouchableOpacity title = "business" onPress={() =>{BusinessState()}}>
              <LinearGradient
                style={{
                    height: 60,
                    width: 250,
                    borderRadius: 75,
                    alignItems:'center',
                    marginBottom: 20,
                    marginLeft: 10,
                }}
                colors={['#F8C471','#FF8900' ]}>
                    
                  <LinearGradient
                      style={{
                          height: 55,
                          width: 300,
                          borderRadius: 75,
                          justifyContent:'center',
                          alignItems:'center',
                        }}
                      colors={['#F8C471','#F5B041' ]}>
                          <Text style={{
                                          fontSize: 25,
                                          
                                          fontWeight: "900",
                                          color: '#ffffff'}}>Organization
                          </Text>
                    </LinearGradient>
              </LinearGradient>
            </TouchableOpacity>
            <Text style ={{fontWeight:'900', color: 'white',marginBottom: 20, fontSize: 20}}> or </Text>
                        
                <TouchableOpacity title = "user" onPress={()=>{UserState()}}>
                  <LinearGradient
                    style={{
                        height: 60,
                        width: 250,
                        borderRadius: 75,
                        alignItems:'center',
                        
                        marginLeft: 10,
                      }}
                    colors={['#F8C471','#FF8900' ]}>
                
                      <LinearGradient
                        style={{
                            height: 55,
                            width: 300,
                            borderRadius: 75,
                            justifyContent:'center',
                            alignItems:'center',
                            }}
                        colors={['#F8C471','#F5B041' ]}>
                          <Text style={{
                                          fontSize: 25,
                                          
                                          fontWeight: "900",
                                          color: '#ffffff'}}>Personal
                          </Text>
                      </LinearGradient>
                        </LinearGradient>
                </TouchableOpacity>
              
        <Text style ={{fontWeight:'900', color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10, fontStyle: "italic"}}> Start Exploring... </Text>
        </View>
        </LinearGradient>
   </View> 
      
 
      
    );
};

export default RegistrationScreen;