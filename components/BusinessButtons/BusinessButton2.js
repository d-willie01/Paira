import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./BusinessButtonStyles";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const BusinessButton2 = ({text}) => {
    return(
      
        <TouchableOpacity 

            style={{
                width:'45%',
                height:'70%',
                alignContent:'center'
                
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
                     bottom:5,
                     }}>
                        
                        <FontAwesome5 name="seedling" size={'30%'} color="#57D760" style={{
                            alignSelf:'center',
                            marginTop:'5%'
                        }} />
                        <Text
                        numberOfLines={1}
                        style={{
                        fontSize:'46%',
                        fontWeight:"900",
                        color:'white',
                        textAlign:'center',
                        fontStyle:'italic',
                        
                        }}>{'159'}</Text>
                        
                        <Text
                        numberOfLines={1}
                        style={{
                        fontSize:'20%',
                        fontWeight:"800",
                        color:'white',
                        textAlign:'center',
                        fontStyle:'italic',
                        marginTop:'-2%'
                        
                        }}>{'Matches'}</Text>
                        

              



                    </LinearGradient>
                </View>
            </TouchableOpacity>
 
    )
}
export default BusinessButton2;