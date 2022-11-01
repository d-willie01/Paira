import React from "react";
import { StyleSheet,Text, View, Image,TouchableOpacity, SafeAreaView, StatusBar, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";


const RegistrationStyles = StyleSheet.create({

    BackgroundGradient:{
                    height: 60,
                    width: 250,
                    borderRadius: 75,
                    alignItems:'center',
                    marginBottom: 20,
                    marginLeft: 10,
               
    },
    ForegroundGradient: {
        height: 55,
        width: 300,
        borderRadius: 75,
        justifyContent:'center',
        alignItems:'center',
    },
    InsideText: {
        fontSize: 25,
                                          
        fontWeight: "900",
        color: '#ffffff'
    },
    OutsideText:{
        fontWeight:'900', 
        color: 'white', 
        fontSize: 20, 
        fontStyle: "italic",
    },
    textView: {
        height: heightPercentageToDP('10%'),
        width: widthPercentageToDP('100%'),
        alignItems: 'center', 
        justifyContent:'center'
    },
    topExtraSpaceView:{
        height: heightPercentageToDP('30%'),
        width: widthPercentageToDP('100%'),
        alignItems: 'center'
    },

});

export default RegistrationStyles;
