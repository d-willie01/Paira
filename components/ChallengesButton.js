import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const ChallengesButton = () =>{
    return(
        <TouchableOpacity style={styles.button}>
            <EvilIcons name = "star" size= {50} color = "#D7D7D7"/>
        </TouchableOpacity>
    )
}
export default ChallengesButton;