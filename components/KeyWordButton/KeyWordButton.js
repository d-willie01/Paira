import React from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View, } from 'react-native'
import styles from "./KeyWordButtonStyles";


const KeyWordButton = ({text, selected, onPress, onLongPress, color, disabled }) => {

    return(

        <View style={{overflow: 'hidden'}}>
        <TouchableOpacity 
        //onLongPress ={() => console.log(text)}
        onLongPress ={onLongPress}
        onPress ={onPress}
        style={{height:110,
            width:123,
            borderRadius:75,
            margin: 10,
            color: {color}
            
        }}
        disabled = {disabled}>
            <View>
        <LinearGradient
        
                 colors={ selected ? ['#777777','#878787' ] :  ['#FF9100','#FFA42B']}
                 style={styles.MatchCategorygrad}>
                    <Text numberOfLines={1} style={{
                    fontSize:17,
                    fontWeight:'900',
                    color:'white',
                    textAlign:'center',
                    alignSelf:'center',
                    fontStyle:'italic',
                    
                    }}>{text}</Text>
                
               </LinearGradient>
               </View>
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
/*
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
                    */

/*
const KeyWordButton = ({text, selected, onPress, onLongPress, color}) => {

    return(

        <View style={{overflow: 'hidden'}}>
        <TouchableOpacity 
        // onLongPress ={() => console.log(text)}
        onLongPress = {onLongPress}
        onPress={onPress} 
        style={styles.MatchCategoryParent}>
            <View>
        <LinearGradient
        
                 colors={[color,color]}
                 style={styles.MatchCategorygrad}>
                    <Text numberOfLines={1} style={{
                    fontSize:17,
                    fontWeight:'900',
                    color:'white',
                    textAlign:'center',
                    alignSelf:'center',
                    fontStyle:'italic',
                    
                    }}>{text}</Text>
                
               </LinearGradient>
               </View>
        </TouchableOpacity>
    </View>
    )

}

export default KeyWordButton;
*/