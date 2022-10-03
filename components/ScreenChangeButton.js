import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView } from "react-native";

const ScreenChangeButton = () =>{
    return(
        <SafeAreaView style={styles.container} >
                <TouchableOpacity style={styles.button}/>
        </SafeAreaView>
    )
}
export default ScreenChangeButton