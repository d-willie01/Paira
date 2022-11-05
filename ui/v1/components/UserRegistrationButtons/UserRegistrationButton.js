import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import styles from "./BusinessButtonStyles";
import styles from "../BusinessButtons/BusinessButtonStyles"
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 



const UserRegistrationButton = ({text, onPress, placeholder, isSecureEntry, onChangeText}) => {
    return(

<TouchableOpacity 

        style={{
            width:'60%',
            height:'50%',
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
                 
                 }}><TextInput
                 
                 style ={{
                    fontStyle:'normal',
                    fontWeight:'600',
                    color:'white',
                    textAlign:'center',
                    fontSize:'20%',
 
                 }}

                secureTextEntry ={isSecureEntry}
                placeholder ={placeholder}
                onChangeText={onChangeText}>
                

                 </TextInput>
                </LinearGradient>
            
            </View>

</TouchableOpacity>

)
}
export default UserRegistrationButton;