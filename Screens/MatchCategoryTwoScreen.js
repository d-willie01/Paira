import React from "react";
import {Text, FlatList, View} from 'react-native'
import Card from "../components/CardPost/Card";
import DATA from "../assets/Data/EntertainmentData";

const MatchCategoryTwoScreen = () => {
    
    
    
    
    


    
    return(
        
        <View style={{
           bottom:60 
            
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

export default MatchCategoryTwoScreen;