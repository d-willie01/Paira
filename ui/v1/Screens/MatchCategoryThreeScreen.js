import React from "react";
import {Text, View, FlatList} from 'react-native'
import DATA from "../assets/Data/PlacesData";
import Card from "../components/CardPost/Card";

const MatchCategoryThreeScreen = () => {
    
    
    
    return(
        <View style={{
            flex: 1, 
            alignItems:"center",
            justifyContent:"center"
        }}>
        
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={DATA}
        renderItem={({item}) => <Card card={item}/>}
        />
    </View>
    );
};

export default MatchCategoryThreeScreen;