import React from "react";
import {Text, SafeAreaView, Button, TouchableOpacity, View} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import styles from "./CategoryButtonStyles";

const CategoryButton = ({text}) => {
    return (
        <View >
            <TouchableOpacity style={styles.MatchCategoryParent}>
            <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.MatchCategorygrad}>
                        <Text numberOfLines={1} style={{
                        fontSize:17,
                        fontWeight:'900',
                        color:'white',
                        textAlign:'center',
                        justifyContent:'center',
                        fontStyle:'italic'
                        }}>{text}</Text>
                   </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryButton;