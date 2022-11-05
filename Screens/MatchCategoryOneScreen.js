import React from "react";
import {Text, FlatList, View} from 'react-native'
import Card from "../components/CardPost/Card";
import RestaurantData from "../assets/Data/RestaurantData";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../components/CardPost/CardStyles";
import { TouchableOpacity } from "react-native";


const MatchCategoryOneScreen = ({route}) => {
    return(

<LinearGradient // background gradient view
      style={styles.container}
      colors={['#B1B1B3','#CACACC',]}>
        <View>
        <Text style = {{ fontSize: 20, color: 'white'}}> {route.paramKey.disableItems}</Text>
        </View>
        <TouchableOpacity 
      //TIPS Button 
          style={{
              marginTop:115,
              marginLeft:15,
              position:'absolute',
            }}

      //button function
            onPress={()=> console.log('yeee')}>
              
                <View
      //Button Style
                     style={styles.BCardBackgroundParent}>
                    <LinearGradient
                     colors={['#CACACC','#B1B1B3']}
                     style={styles.BCardBackgroundgrad}>
                   </LinearGradient>

                
                </View>
             </TouchableOpacity>

       <View>
        <Text numberOfLines={3} style={{
            fontSize:15,
            marginTop:70,
            marginLeft:35,
            width:350,
            textAlign:'center',
            fontWeight:'900',
            color:'white',
            position:'absolute',
        }}
        >
         Here are some local food matches based on YOUR interests

        </Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={RestaurantData}
        renderItem={({item}) => <Card card={item}/>}
        />



       </View>

</LinearGradient>
    );
}; 

export default MatchCategoryOneScreen;