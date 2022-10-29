import React from "react";
import {Text, View, FlatList} from 'react-native'
import Card from "../components/CardPost/Card";
import DATA from "../assets/Data/ArtData";

const MatchCategoryFourScreen = () => {
    
    
    
    
    
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

export default MatchCategoryFourScreen;