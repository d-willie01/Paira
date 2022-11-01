import styles from "../Styles/styles";
import React from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {StyleSheet, Text, TouchableOpacity,} from 'react-native'


const LinearGradientTO = () =>{
    return(
    
    <TouchableOpacity 
                       style={styles.TOProfileBackgroundParent}>
                      <LinearGradient
                       colors={['#F5B041','#F8C471']}
                       style={styles.TOPofileBackgroundgrad}>
                     </LinearGradient>
                  
               </TouchableOpacity>

    )
}
export default LinearGradientTO;