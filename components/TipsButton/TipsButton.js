import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./TipsButtonStyles";
import { Entypo } from '@expo/vector-icons'; 


const TipsButton = ({text}) =>{
    
    return (
            <TouchableOpacity style = {{
                
                
                
            }}>
                <View
      //Button Style
                     style={styles.interestbuttonParent}>
                    <LinearGradient
                        colors={['#F5B041','#F8C471']}
                        style={styles.interestbuttongrad}>
                     <Entypo 
                        name="light-bulb" 
                        size={14} 
                        color="grey" 
                        style={{
                        position:'absolute',
                        marginTop:1,
                        marginLeft:140, }} 
             />   
                    <Text numberOfLines={3} style={{
                        fontSize:13.5,
                        fontWeight:'800',
                        color:'grey',
                        fontStyle:'italic',
                        
                        alignSelf:"center", 
                        textDecorationLine:'underline'
                        

                        
                        }}>Tip of the Day
                    </Text>
                        
                    <Text numberOfLines={3} style={{
                        fontSize:14,
                        fontWeight:'800',
                        color:'white',
                        fontStyle:'italic',
                        
                        textAlign:'center',
                        
                        }}>{text}
                    </Text>

            
                        
                   </LinearGradient>

                   
            
                </View>



            </TouchableOpacity>
    )
}


export default TipsButton;