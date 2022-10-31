import React from "react";
import {Text, View, Button, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import PressButton from "../components/PressTest/PressButton";
import startScreenStyle from "../RegistrationScreens/StartSceenStyles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";




export const LoginButton = ({text}) => {
    
    return(
                <LinearGradient
                    style={startScreenStyle.backgroundofButton}
                    colors={['#F8C471','#FF8900' ]}>
                        
                    <LinearGradient
                        style={startScreenStyle.foreGroundButton}
                        colors={['#F8C471','#F5B041' ]}>
                            <Text style={{
                                            fontSize: 25,
                                            
                                            fontWeight: "900",
                                            color: '#ffffff'}}>{text}
                            </Text>
                        </LinearGradient>
                </LinearGradient>



    )

};