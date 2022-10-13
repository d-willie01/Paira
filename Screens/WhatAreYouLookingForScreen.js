import React from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity, SafeAreaView, Text} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FoodTopicButton from "../components/AddTopicButtons";

const WhatAreYouLookingForScreen = () =>{
    return(
    <SafeAreaView style={styles.container2T}>
        <FoodTopicButton/>
    </SafeAreaView>
    )
}
export default WhatAreYouLookingForScreen;