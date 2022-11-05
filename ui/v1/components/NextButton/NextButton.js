import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import styles from "./BusinessButtonStyles";
import styles from "../BusinessButtons/BusinessButtonStyles"
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 



const NextButton = ({text, onPress}) => {
    return(

<TouchableOpacity 

        style={{
            width:'50%',
            height:'60%',
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
                 
                 }}><Text
                 style={{
                    fontStyle:'normal',
                    fontWeight:'900',
                    color:'white',
                    textAlign:'center',
                    fontSize:'20%'
                
                 }}>
                    Next
                    </Text>
                </LinearGradient>
            
            </View>

</TouchableOpacity>

)
}
export default NextButton;