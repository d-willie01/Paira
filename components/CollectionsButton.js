import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { Entypo } from "@expo/vector-icons";

const CollectionButton = ({text}) =>{
    return(
        <TouchableOpacity style={styles.longbuttonD}>
            <Text style={{
                fontSize: 20,
                color: '#ffffff'
                

            }}>{text}</Text>
        </TouchableOpacity>
    )
}
export default CollectionButton;