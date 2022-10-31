
import styles from "../Styles/styles";
import React from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {StyleSheet, Text, TouchableOpacity,} from 'react-native'


const BusinessDetail = () => {
    return(
<LinearGradient
                                colors={['#F8C471','#FF8900']}
                                style={{ 
                                    height:175,
                                    width:190,
                                    borderRadius:50,
                                    marginTop: 30,
                                    marginRight: 10,
                                    bottom: 5,
                                    alignItems: 'center',}}>
                            <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{height:170,
                                    width:185,
                                    borderRadius:50,
                                    alignItems:'center'}}>

                        
                            </LinearGradient>
</LinearGradient>
)};

export default BusinessDetail;