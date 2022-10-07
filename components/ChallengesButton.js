import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ChallengesButton = () =>{
    return(
        <TouchableOpacity style={{
            alignSelf: 'center',
            marginTop: 10
        }}>
            <AntDesign name = "setting" size= {40} color = "black"/>
        </TouchableOpacity>
    )
}
export default ChallengesButton;