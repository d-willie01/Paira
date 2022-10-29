import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./BusinessCardPicStyles";
import { EvilIcons } from '@expo/vector-icons'; 




const BusinessCardPic = ({text}) =>{
    
    return (
            <TouchableOpacity style = {{
                
                
                
            }}>
                <View
      //Button Style
                     style={styles.interestbuttonParent}>
                    <LinearGradient
                        colors={['#F5B041','#F8C471']}
                        style={styles.interestbuttongrad}>

                    <View style={{
                        alignSelf:"flex-end",
                        top: 50
                    }}>
                    <EvilIcons name="plus" size={50} color="#ffffff" />
                    </View>

            
                        
                   </LinearGradient>

                   
            
                </View>



            </TouchableOpacity>
    )
}


export default BusinessCardPic;