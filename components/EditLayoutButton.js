import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { FontAwesome, EvilIcons } from "@expo/vector-icons";

const ScreenChangeButton = ({text}) =>{
    return(
        <TouchableOpacity style={styles.button}>
            <EvilIcons name = "pencil" size= {50} color = "#D7D7D7"/>
        </TouchableOpacity>
    )
}
export default ScreenChangeButton