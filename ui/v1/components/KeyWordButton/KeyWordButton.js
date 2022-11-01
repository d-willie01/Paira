import React from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View} from 'react-native'
import styles from "./KeyWordButtonStyles";


const KeyWordButton = ({text, onLongPress}) => {

    return(

        <View >
        <TouchableOpacity 
        // onLongPress ={() => console.log(text)}
        onLongPress = {onLongPress}
        //onPress={onPress} 
        style={styles.MatchCategoryParent}>
        <LinearGradient
                 colors={['#777777','#878787']}
                 style={styles.MatchCategorygrad}>
                    <Text numberOfLines={1} style={{
                    fontSize:'17%',
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

export default KeyWordButton;