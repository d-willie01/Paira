import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./SocialButtonStyles";


const SocialButton2 = ({text}) => {
    return(
        <TouchableOpacity 
      //Profile Info
             style={{
              
              
            }}

        //button function
            onPress={()=> console.log('yeee')}>
                <View
        //Profile Info Style
                     style={styles.PairaScoreParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.PairaScoregrad}>
                        <Text
        //Text Inside of Profile info
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

<FontAwesome5 name="user-friends" size={29} color="white" style={{
                      position:'absolute',
                      marginLeft: 85,
                      marginTop:12,
                    }} />



                    </LinearGradient>
                </View>
            </TouchableOpacity>
    )
}
export default SocialButton2;