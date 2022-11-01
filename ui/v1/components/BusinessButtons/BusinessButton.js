import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./BusinessButtonStyles";

const BusinessButton = ({ text }) => {
  return (
    <View
      style={{
        margin: 10,
      }}
    >
      <TouchableOpacity onPress={() => console.log("yeee")}>
        <View style={styles.PairaScoreParent}>
          <LinearGradient
            colors={["#F8C471", "#F5B041"]}
            style={styles.PairaScoregrad}
          >
            <Text
              numberOfLines={1}
              style={{
                fontSize: 33,
                fontWeight: "900",
                color: "white",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              {text}
            </Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default BusinessButton;
