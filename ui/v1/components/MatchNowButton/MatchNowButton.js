import React from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View} from 'react-native'
import styles from "./MatchNowButtonStyles";


const MatchNowButton = ({text, onPress}) =>{
    return(
    
        <TouchableOpacity 

        style={{
            width:'60%',
            height:'70%',
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
                
                 }}>{text}</Text>
                 </LinearGradient>
         </View>
</TouchableOpacity>

    )
}
export default MatchNowButton;