import React from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View} from 'react-native'
import styles from "./MatchNowButtonStyles";


const MatchNowButton = ({text}) =>{
    return(
    
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
                    alignSelf:'center',
                    fontStyle:'italic'
                    }}>{text}</Text>
               </LinearGradient>
        </TouchableOpacity>
    </View>

    )
}
export default MatchNowButton;