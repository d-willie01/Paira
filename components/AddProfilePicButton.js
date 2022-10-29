import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddProfileButton = () =>{
    return(
        <TouchableOpacity 
                  style={{
                  marginLeft:15,
                  marginTop: 45, 
                  borderRadius:70,
                  width:140,
                  height:140,
  
                  position:"absolute",
                  backgroundColor: "#F39C12"}}> 
  
                </TouchableOpacity>
    )
}
export default AddProfileButton;

