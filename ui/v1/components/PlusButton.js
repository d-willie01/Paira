import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { Feather } from "@expo/vector-icons";

const PlusButton = ({text}) =>{
    return(
        <TouchableOpacity style={styles.buttonD}>
            <Feather name = "plus" size= {50} color = "#D7D7D7"/>
        </TouchableOpacity>
    )
}
export default PlusButton;