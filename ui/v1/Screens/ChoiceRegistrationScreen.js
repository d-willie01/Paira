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
        
    <SafeAreaView style={styles.containerT}>
        <SafeAreaView style={styles.headerT}>
            <Text style={styles.titleT}>Welcome To Paira </Text>
        </SafeAreaView>
            <SafeAreaView style={styles.footerT}>
                <SafeAreaView> 
                    <Text> Start exploring </Text>
                </SafeAreaView>
                <SafeAreaView style= {styles.TopItemsMiddleScreen} >
                    <TouchableOpacity style={styles.button_T} onPress={alert}>
                         <Text style = {styles.textSignT}> Business </Text>
                    </TouchableOpacity>
                </SafeAreaView>
                
                                <SafeAreaView style = {styles.centerItemsMiddleScreen}>
                                    <Text > or </Text>
                                </SafeAreaView>
                                        <SafeAreaView style= {styles.BottomItemMiddleScreen}>
                                            <TouchableOpacity style={styles.button_T} onPress={alert}>
                                                <Text style = {styles.textSignT}> User </Text>
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




