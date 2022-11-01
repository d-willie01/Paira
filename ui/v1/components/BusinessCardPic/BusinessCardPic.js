import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./BusinessCardPicStyles";
import { EvilIcons } from '@expo/vector-icons'; 




const BusinessCardPic = ({text}) =>{
    
    return (
       
        <TouchableOpacity // Add Business Pics Button 
                style = {{
                    width:'75%',
                    height:'90%',
                    justifyContent:'center'}}

                onPress={()=> console.log('yeee')}>
                
            <View // Background for 3D
                     style={{
                     height:'100%',
                     width:'100%',
                     borderRadius:'40%',
                     backgroundColor:'#F39C12',}}>

                <LinearGradient // Linear Gradient Part
                         colors={['#F8C471','#F5B041']}
                         style={{
                         height:'100%',
                         width:'100%',
                         borderRadius:'40%',
                         bottom:5,}}>
                        
                    <View // Plus Icon
                        style={{
                        position:'absolute',
                        alignSelf:'flex-end',
                        marginTop:'80%',
                        marginLeft:'80%',}}>

                             <EvilIcons name="plus" size={'35%'} color="black" />
                    
                    </View>
                 </LinearGradient>
            </View>
        </TouchableOpacity>



    )
}


export default BusinessCardPic;