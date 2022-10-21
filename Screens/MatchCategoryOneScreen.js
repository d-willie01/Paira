import React from "react";
import {Text, FlatList, View} from 'react-native'
import Card from "../components/CardPost/Card";
import RestaurantData from "../assets/Data/RestaurantData";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../components/CardPost/CardStyles";


const MatchCategoryOneScreen = () => {
    return(

<LinearGradient // background gradient view
      style={styles.container}
      colors={['#B1B1B3','#CACACC',]}>

       <View>
        <Text numberOfLines={3} style={{
            fontSize:20,
            marginTop:55,
            marginLeft:35,
            width:350,
            textAlign:'center',
            fontWeight:'900',
            color:'white',
            position:'absolute',
        }}
        >
         Showing you local food results based on YOUR interests

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