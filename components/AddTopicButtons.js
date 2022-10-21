import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text, View} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 



const FoodTopicButton = () =>{
    return(
    <View style={{ flex: .27, flexDirection:'column'}}>
        <TouchableOpacity style={{
            height: 130,
            width: 130,
            backgroundColor: 'orange',
            borderRadius: 75,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <MaterialCommunityIcons name="food-drumstick" size={60} color="white" />
            
        </TouchableOpacity>
        <TouchableOpacity style={{
            height: 130,
            width: 130,
            backgroundColor: 'orange',
            borderRadius: 75,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <MaterialIcons name="sports-football" size={60} color="white" />
            
        </TouchableOpacity>
        <TouchableOpacity style={{
            height: 130,
            width: 130,
            backgroundColor: 'orange',
            borderRadius: 75,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <MaterialIcons name="sports-football" size={60} color="white" />
            
        </TouchableOpacity>
    </View>
    );
};
export default FoodTopicButton;