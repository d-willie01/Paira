import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


const ChoiceRegistration = () => {
    return(
        /*
        <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>Welcome to Paira!</Text>

        </View>
        </View>
        */
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Welcome To Paira </Text>
        <SafeAreaView
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <TouchableOpacity style={styles.button_} onPress={alert}>

            <Text> User </Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.button_} onPress={alert}>

            <Text> Business </Text>

            </TouchableOpacity>
        </SafeAreaView>
        

            </View>
        </View>
        
    );
};

export default ChoiceRegistration;


const { height } = Dimensions.get("screen");
const height_logo = height * .5;

//const styles = StyleSheet.create({
const styles = StyleSheet.create({

    container: {
        flex: 5,
        backgroundColor: '',

    },
    header: {
        backgroundColor: 'white',
        flex: 1,
        justifyingContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingnBottom: 50

    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: 'center'
    },
    text_header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 25
    },
    text_footer: {
        color: '#0537a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: "#50375a"
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },

    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    logo: {
        width: height_logo,
        height: height_logo,

    },

    title: {
        color: "orange",
        marginTop: 30,
        fontSize: 35,
        fontWeight: 'bold'
    },

    button_: {

        alignItems: 'center',
        backgroundColor: 'orange'

    }
});
