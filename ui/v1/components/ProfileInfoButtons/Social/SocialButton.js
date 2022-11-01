import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./SocialButtonStyles";

const SocialButton = ({text}) => {
    return(
        <TouchableOpacity 
            onPress={()=> console.log('yeee')}>
                <View
                     style={styles.PairaScoreParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.PairaScoregrad}>
                        <Text
                        numberOfLines={1}
                        style={{
                        fontSize:33,
                        fontWeight:"900",
                        color:'white',
                        textAlign:'center',
                        position:'absolute',
                        marginTop:8,
                        marginLeft:20,
                        fontStyle:'italic',
                        
                        }}>{text}</Text>

              <MaterialCommunityIcons name="crown" size={37} color="white" style={{
                position:'absolute',
                marginTop:8,
                marginLeft:94,}}>
              </MaterialCommunityIcons>



                    </LinearGradient>
                </View>
            </TouchableOpacity>
    )
}
export default SocialButton;