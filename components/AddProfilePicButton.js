import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddProfileButton = () =>{
    return(
        <TouchableOpacity 
                  style={{
                  height: 100, 
                  width: 100, 
                  marginLeft:26,
                  marginTop: 40, 
                  borderRadius:80,
                  width:160,
                  height:160,
  
                  position:"absolute",
                  backgroundColor: "#F39C12"}}> 
  
                </TouchableOpacity>
    )
}
export default AddProfileButton;

