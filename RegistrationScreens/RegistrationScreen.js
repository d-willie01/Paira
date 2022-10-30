import React, { useState, useContext } from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform, Image, Button, VirtualizedList } from 'react-native';
import {StateContext} from "../StateManagement/StateProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../Styles/styles";
import { LinearGradient } from "expo-linear-gradient";
import RegistrationStyles from "./RegistrationScreenStyles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";




const RegistrationScreen = () => {


const {BusinessState, UserState} = useContext(StateContext);
    

  

    return(


    
    <View style={{flex:1, alignItems: 'center'}}>
    <LinearGradient // background gradient view
        style={styles.container}
        
        colors={['#B1B1B3','#CACACC',]}>
          <View style={{alignItems: 'center'}}>
          <View style={RegistrationStyles.topExtraSpaceView}>
          
          </View>
                  <View style={RegistrationStyles.textView}>
              
            <Text style ={RegistrationStyles.OutsideText}> Be discovered </Text>
            </View>
            <TouchableOpacity title = "business" onPress={() =>{BusinessState()}}>
              <LinearGradient
                style={RegistrationStyles.BackgroundGradient}
                colors={['#F8C471','#FF8900' ]}>
                    
                  <LinearGradient
                      style={RegistrationStyles.ForegroundGradient}
                      colors={['#F8C471','#F5B041' ]}>
                          <Text style={RegistrationStyles.InsideText}>Organization
                          </Text>
                    </LinearGradient>
              </LinearGradient>
            </TouchableOpacity>
            <Text style ={{fontWeight:'900', color: 'white',marginBottom: 20, fontSize: 20}}> or </Text>
            <View style={RegistrationStyles.textView}
            //Personal Button
            >        
                <TouchableOpacity title = "user" onPress={()=>{UserState()}}>
                  <LinearGradient
                    style={RegistrationStyles.BackgroundGradient}
                    colors={['#F8C471','#FF8900' ]}>
                
                      <LinearGradient
                        style={RegistrationStyles.ForegroundGradient}
                        colors={['#F8C471','#F5B041' ]}>
                          <Text style={RegistrationStyles.InsideText}>Personal
                          </Text>
                      </LinearGradient>
                        </LinearGradient>
                </TouchableOpacity>
                </View> 
              <View style ={RegistrationStyles.textView

                
            // Personal Button   
            }> 
              <Text 
              style ={RegistrationStyles.OutsideText}
              > Start Exploring </Text>
              </View>
        
        </View>
        </LinearGradient>
   </View> 
      
 
      
    );
};

export default RegistrationScreen;