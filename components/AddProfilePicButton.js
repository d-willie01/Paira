import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ChallengesButton = () =>{
    return(
        <TouchableOpacity style={styles.buttonD}>
            <Ionicons name = "person" size= {50} color = "#D7D7D7"/>
        </TouchableOpacity>
    )
}
export default ChallengesButton;