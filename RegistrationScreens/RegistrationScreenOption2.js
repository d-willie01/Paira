import React, { useState, useContext } from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform, Image, Button } from 'react-native';
import {StateContext} from "../StateManagement/StateProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../Styles/styles";
import { LinearGradient } from "expo-linear-gradient";




const RegistrationScreen2 = () => {



    

  

    return(


    
    <View style={{flex:1}}>
    <LinearGradient // background gradient view
        style={styles.containerCenter}
        
        colors={['#B1B1B3','#CACACC',]}>
            <View style={{alignItems:'center', justifyContent:'center'}}>
            <Text style ={{fontWeight:'900', color: 'white', fontSize: 20, marginTop: 320, marginBottom: 20, fontStyle: "italic"}}> Would You Like To Register Your </Text>
            </View>
            <TouchableOpacity title = "business" onPress={() =>{}}>
              <LinearGradient
                style={styles.registerbuttonBackground}
                colors={['#F8C471','#FF8900' ]}>
                    
                  <LinearGradient
                    style={styles.registerbuttonForground}
                    colors={['#F8C471','#F5B041' ]}>
                          <Text style={styles.registerText}>Organization
                          </Text>
                    </LinearGradient>
              </LinearGradient>
            </TouchableOpacity>
            <Text style ={{fontWeight:'900', color: 'white',marginBottom: 20, fontSize: 20}}> or </Text>
                        
                <TouchableOpacity title = "user" onPress={()=>{UserState()}}>
                  <LinearGradient
                    style={styles.registerbuttonBackground}

                    colors={['#F8C471','#FF8900' ]}>
                
                      <LinearGradient
                        style={styles.registerbuttonForground}
                        colors={['#F8C471','#F5B041' ]}>
                          <Text style={styles.registerText}>Personal
                          </Text>
                      </LinearGradient>
                        </LinearGradient>
                </TouchableOpacity>
              
        <Text style ={{fontWeight:'900', color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10, fontStyle: "italic"}}> Start Exploring... </Text>
        </LinearGradient>
   </View> 
      
 
      
    );
};

export default RegistrationScreen2;