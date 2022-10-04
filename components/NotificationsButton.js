import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { Entypo } from "@expo/vector-icons";

const NotificationsButton = () =>{
    return(
        <TouchableOpacity style={styles.button}>
            <Entypo name = "line-graph" size= {30} color = "#D7D7D7"/>
        </TouchableOpacity>
    )
}
export default NotificationsButton;