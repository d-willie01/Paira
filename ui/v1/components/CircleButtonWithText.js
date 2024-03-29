import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const ChallengesButton = ({text}) =>{
    return(
        <TouchableOpacity style={styles.buttonD}>
            <Text style={styles.textD}>{text}</Text>
        </TouchableOpacity>
    )
}
export default ChallengesButton;