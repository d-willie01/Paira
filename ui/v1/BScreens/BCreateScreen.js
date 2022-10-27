import React from "react";
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native'
import styles from "./BScreenStyles/BCreateScreenStyles";
import CategoryButton from "../components/CategoryButton/CategoryButton";

const BCreateScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <CategoryButton text = "Food"/>
                <CategoryButton text = "Places" />
                <CategoryButton text = "Entertainment"/>
                <CategoryButton text = "Art & Music"/>
                <CategoryButton text = "Sports & Fitness"/>
            </View>
        </SafeAreaView>
    );
};

export default BCreateScreen;