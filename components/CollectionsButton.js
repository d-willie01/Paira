import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, View, Text, Image} from "react-native";
import { Entypo } from "@expo/vector-icons";

const CollectionButton = ({text}) =>{
    return(
<View style={{ height: 300, width: 150, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd', marginTop: 40, borderRadius: 25 }}>
    
        <View style={{ flex: 2.5, backgroundColor: "#ffffff", borderRadius: 25 }}>
        
            <Image source={require('../assets/Icons/PairaLogo.png')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover'   }}
            />
        </View>
        <View style={{ flex: .5,  alignItems:'center', justifyContent:'center',  }}>
            <Text style={{
                fontSize: 25
            }}>{text}</Text>
        </View>
    
</View>
    )
}
export default CollectionButton;


/*

<TouchableOpacity style={styles.longbuttonD}>
            <Text style={{
                fontSize: 20,
                color: '#ffffff'
                

            }}>{text}</Text>
        </TouchableOpacity>


        longbuttonD: {
        marginVertical: 25,
        backgroundColor: 'orange',
        width: 150,
        height: 300,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: "flex-end",
        marginHorizontal: 15,
*/