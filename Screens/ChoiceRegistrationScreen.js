import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../Styles/styles";

const ChoiceRegistration = () => {
    return(
        /*
        <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>Welcome to Paira!</Text>

        </View>
        </View>
        */
        
    <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.header}>
            <Text style={styles.title}>Welcome To Paira </Text>
        </SafeAreaView>
            <SafeAreaView style={styles.footer}>
                <SafeAreaView> 
                    <Text> Start exploring </Text>
                </SafeAreaView>
                <SafeAreaView style= {styles.TopItemsMiddleScreen} >
                    <TouchableOpacity style={styles.button_} onPress={alert}>
                         <Text style = {styles.textSign}> Business </Text>
                    </TouchableOpacity>
                </SafeAreaView>
                
                                <SafeAreaView style = {styles.centerItemsMiddleScreen}>
                                    <Text > or </Text>
                                </SafeAreaView>
                                        <SafeAreaView style= {styles.BottomItemMiddleScreen}>
                                            <TouchableOpacity style={styles.button_} onPress={alert}>
                                                <Text style = {styles.textSign}> User </Text>
                                            </TouchableOpacity>
                                        </SafeAreaView>
                                <SafeAreaView>
                                    <Text> Be discovered </Text>
                                </SafeAreaView>
                  
            </SafeAreaView>    
        
    </SafeAreaView>
        
    );
};

export default ChoiceRegistration;




