import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./TipsButtonStyles";
import { Entypo, Octicons } from '@expo/vector-icons'; 


const TipsButton = ({text}) =>{
    
    return (
        <TouchableOpacity 

        style={{
            width:'80%',
            height:'80%',
            alignContent:'center',
            marginTop:'1%'
            
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
                    
                    <Octicons name="light-bulb" size={'10%'} color="grey" style={{
                        alignSelf:'center',
                        marginTop:'1%'
                        }} />
                    
                    <Text
                    numberOfLines={1}
                    style={{
                    fontSize:'10%',
                    fontWeight:"900",
                    color:'grey',
                    textAlign:'center',
                    fontStyle:'italic',
                    alignSelf:'center',
                    textDecorationLine:'underline'
                    
                    }}>{'Tips of the Day'}</Text>

                    <Text
                    numberOfLines={2}
                    style={{
                    fontSize:'15%',
                    fontWeight:"800",
                    color:'white',
                    textAlign:'center',
                    fontStyle:'italic',
                    alignSelf:'auto',
                    marginTop:'1%'

                    
                    
                    
                    }}>{'Getting matched with local organizations can earn you crowns!'}</Text>
                    
                    
                    
                </LinearGradient>
            </View>
        </TouchableOpacity>
    )
}


export default TipsButton;