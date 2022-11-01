import React from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View} from 'react-native'
import styles from "./KeyWordButtonStyles";


const KeyWordButton = ({text, selected, onPress, onLongPress, color}) => {

    return(

        <View style={{overflow: 'hidden'}}>
        <TouchableOpacity 
        // onLongPress ={() => console.log(text)}
        onLongPress = {onLongPress}
        onPress={onPress} 
        style={styles.MatchCategoryParent}>
            <View style ={{padding : '7.5%'}}>
        <LinearGradient
                 colors={[color,color]}
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
               </View>
               {selected &&<View 
               style={{
                    position: 'absolute',
                    width: "100%",
                    height:"79%",
                    borderRadius: '60%',
                    backgroundColor:'rgba(0,0,0,0.4)',
                    alignItems: 'center',
                    top: '3%',
                    left:'7%',}}/>}
        </TouchableOpacity>
    </View>
    )

}

export default KeyWordButton;

/*
{selected &&
<View style={{
    position: 'absolute',
    width: "100%",
    height:"100%",
    backgroundColor:'rgba(0,0,0,0.4)',
    top: 0,
    left:0,

}}/>}
const getSelected = () => {
    selectedItems.includes( )
}
*/

