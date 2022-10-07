import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { Entypo } from "@expo/vector-icons";

const NotificationsButton = () =>{
    return(
        <TouchableOpacity style={{
            alignSelf: 'center',
            marginVertical: 20
            
        }}>
            <Entypo name = "line-graph" size= {35} color = "black"/>
        </TouchableOpacity>
    )
}
export default NotificationsButton;