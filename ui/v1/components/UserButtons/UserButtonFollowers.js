import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import styles from "./BusinessButtonStyles";
import styles from "../BusinessButtons/BusinessButtonStyles"
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 


const UserButtonFollowers = ({text, onPress}) => {
    return(
      
        <TouchableOpacity 

        style={{
            width:'40%',
            height:'100%',
            alignContent:'center',
            justifyContent:'space-evenly'
            
        }}
        onPress={onPress}>
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
                 bottom:'5%',
                 justifyContent:'space-evenly',
                 
                 }}>
                    
                    <Octicons name="people" size={'30%'} color="#575757" style={{
                        alignSelf:'center',
                        }} />
                    
                    <Text
                    numberOfLines={1}
                    style={{
                    fontSize:'35%',
                    fontWeight:"900",
                    color:'white',
                    textAlign:'center',
                    fontStyle:'italic',
                    alignSelf:'center',
                    
                    }}>{text}</Text>

                    <Text
                    numberOfLines={1}
                    style={{
                    fontSize:'17%',
                    fontWeight:"800",
                    color:'white',
                    textAlign:'center',
                    fontStyle:'italic',
                    alignSelf:'auto'
                    
                    
                    
                    }}>{'Friends'}</Text>
                    
                    

          



                </LinearGradient>
            </View>
        </TouchableOpacity>
 
    )
}
export default UserButtonFollowers;