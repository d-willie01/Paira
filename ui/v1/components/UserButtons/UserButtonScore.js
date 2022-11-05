import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "../BusinessButtons/BusinessButtonStyles"
import { FontAwesome } from '@expo/vector-icons';

const UserButtonScore = ({text, onPress}) => {
    return(
      
        <TouchableOpacity 

        style={{
            width:'40%',
            height:'100%',
            
            
            
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
                    
                    <MaterialCommunityIcons name="crown" size={'30%'} color="dodgerblue" style={{
                        alignSelf:'center',
                        opacity:'100%'}} />
                    
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
                    
                    
                    
                    }}>{'Crowns'}</Text>
                    
                    

          



                </LinearGradient>
            </View>
        </TouchableOpacity>

)
}
export default UserButtonScore;