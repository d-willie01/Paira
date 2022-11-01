import React from "react-native";
import { TouchableOpacity, View, Text, Image} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CollectionsButton2 = ({text, source}) =>{
    return(
    
    <TouchableOpacity 
     style={{ 
        height: '95%', 
        width: 150, 
        marginLeft: 20, 
        borderWidth: 0.5, 
        borderColor: 'white', 
        marginTop: 10, 
        borderRadius: '50%'}}>        
            
            <Image source={source}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:25  }}
            />
        <View style={{ flex: .5,  alignItems:'center', justifyContent:'center',  }}>
            <Text style={{
                fontSize: 25,
                fontStyle: 'italic',
                fontWeight: "bold",
                backgroundColor:'background'
                
            }}>{text}</Text>
        </View>
    
</TouchableOpacity>
    )
}
export default CollectionsButton2;