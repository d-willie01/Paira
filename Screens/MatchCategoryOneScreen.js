import React from "react";
import {Text, FlatList, View} from 'react-native'
import Card from "../components/CardPost/Card";
import RestaurantData from "../assets/Data/RestaurantData";

const MatchCategoryOneScreen = () => {
    return(
       <View>
        <FlatList 
        data={RestaurantData}
        renderItem={({item}) => <Card card={item}/>}
        />
       </View>
    );
};

export default MatchCategoryOneScreen;