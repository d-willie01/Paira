import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const ChallengesButton = ({text}) =>{
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
export default ChallengesButton;