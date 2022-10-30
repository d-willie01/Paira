import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "../BusinessButtons/BusinessButtonStyles"
import { FontAwesome } from '@expo/vector-icons';

const UserButtonScore = ({text}) => {
    return(
      
        <TouchableOpacity 

            style={{
                width:'40%',
                height:'65%'
            }}
            onPress={()=> console.log('yeee')}>
                <View
                     style={{
                     height:'100%',
                     width:'100%',
                     borderRadius:'40%',
                     backgroundColor:'#F39C12',}}>

                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={{
                     height:'100%',
                     width:'100%',
                     borderRadius:'40%',
                     bottom:5,}}>
                        
                        <Text
                        numberOfLines={1}
                        style={{
                        fontSize:37,
                        fontWeight:"900",
                        color:'white',
                        textAlign:'center',
                        fontStyle:'italic',
                        marginTop: 15,
                        
                        }}>{text}</Text>
                        
                        <View style={{ position: 'absolute', marginLeft: 130, marginTop: 20,}}>
                        <MaterialCommunityIcons name="crown" size={35} color="black" />
                        </View>

              



                    </LinearGradient>
                </View>
            </TouchableOpacity>
 
    )
}
export default UserButtonScore;