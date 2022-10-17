import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform, Image, TextInput } from 'react-native';
import styles from "../Styles/styles";
import { FontAwesome } from '@expo/vector-icons'; 
import { LinearGradient } from "expo-linear-gradient";



const BusinessProfileScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style = {{alignItems: "center", fontWeight: '900', fontSize: 20}}> Add Your Card Photo</Text>

            <View style = {styles.viewTest}>
                <TouchableOpacity
                stlye= {{width: 170, height: 150, backgroundColor: 'red'}}>
                    <FontAwesome name="building" size={120} color="black" alignItems ='center' />
                </TouchableOpacity>

            </View>
                <TouchableOpacity >
                            <LinearGradient
                                style={{
                                    height: 45,
                                    width: 310,
                                    borderRadius: 50,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 30,
                                    marginLeft: 10,
                                    marginBottom: 30
                                    
                                
                                }}
                                colors={['#F8C471','#FF8900' ]}>
                            
                                <LinearGradient
                                style={{
                                    height: 40,
                                    width: 300,
                                    borderRadius: 50,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    
                                
                                }}
                                colors={['#F8C471','#F5B041' ]}>
                                    <Text style={{
                                                    fontSize: 25,
                                                    
                                                    fontWeight: "900",
                                                    color: '#ffffff'}}>Add Your Key Words
                                    </Text>
                                </LinearGradient>
                            </LinearGradient>

                        </TouchableOpacity>

                <Text>Slogan</Text>
                    <TextInput 
                    style = {styles.textInputT} 
                    placeholder = 'e.g. Brayben is extremely gay'/>

                        <Text> Describe Yourself</Text>
                     <TextInput 
                style = {styles.textInputLargeT} 
                placeholder = 'e.g. We are a local mom and pop shop...'/>


        </View>
    );
};

export default BusinessProfileScreen;