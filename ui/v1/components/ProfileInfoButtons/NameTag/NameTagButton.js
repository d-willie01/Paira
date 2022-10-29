import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./NameTagButtonStyles";


const NameTagButton = ({text}) =>{
    return(
        <TouchableOpacity 
      //Profile Info
             

        //button function
            onPress={()=> console.log('yeee')}>
                <View
        //Profile Info Style
                     style={styles.profileinfoParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.profileinfograd}>
                        <Text
        //Text Inside of Profile info
                        numberOfLines={2}
                        style={{
                        fontSize:18,
                        fontWeight:"900",
                        color:'white',
                        textAlign:'center',
                        
                        alignContent:'center',
                        marginTop:10,
                        
                        
                        }}>{text} </Text>
                        <Text
        //Text Inside of Profile info
                        numberOfLines={2}
                        style={{
                        fontSize:10,
                        fontWeight:"700",
                        color:'white',
                        alignItems:"center",
                        textAlign:"center"
                        
                        
                        
                        }}>Phoenix, AZ</Text>
                        
                   </LinearGradient>
                </View>
             </TouchableOpacity>
    )
}

export default NameTagButton;