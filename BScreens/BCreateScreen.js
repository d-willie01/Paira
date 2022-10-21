import React from "react";
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native'
import styles from "./BScreenStyles/BCreateScreenStyles";
import CategoryButton from "../components/CategoryButton/CategoryButton";

const BCreateScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <CategoryButton/>
                <CategoryButton />
            </View>
        </SafeAreaView>
    );
};

export default BCreateScreen;