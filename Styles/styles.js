import React from "react";
import { StyleSheet } from "react-native";




    const styles = StyleSheet.create({

        containerT: {
            flex: 1,
            backgroundColor: 'white',
            
    
        },
        headerT: {
            backgroundColor: 'orange',
            flex: 1,
            justifyingContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingnBottom: 50
    
        },
        footerT: {
            flex: 3,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 30,
            alignItems: 'center'
        },
        text_headerT: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            paddingVertical: 25
        },
        text_footerT: {
            color: '#0537a',
            fontSize: 18
        },
        actionT: {
            flexDirection: 'row',
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#f2f2f2',
            paddingBottom: 5
        },
        textInputT: {
            borderWidth: 2,
            borderColor:'#777',
            marginTop: Platform.OS === 'ios' ? 0 : -12,
            paddingLeft: 10,
            color: "#50375a",
            margin: 10,
            height: 40,
            width: 300,
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            marginBottom: 70,
        },
        textInputLargeT: {
            borderWidth: 1,
            borderColor:'#777',
            marginTop: Platform.OS === 'ios' ? 0 : -12,
            paddingLeft: 10,
            color: "#50375a",
            margin: 8,
            width: 350,
            height: 200,
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,

        },
        buttonT: {
            alignItems: 'center',
            marginTop: 50
        },
    
        signInT: {
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
        },
    
        textSignT: {
            fontSize: 18,
            fontWeight: 'light'
        },
    
        titleT: {
            color: "white",
            marginTop: 30,
            fontSize: 35,
            fontWeight: 'bold'
        },
    
        button_T: {
            alignItems: 'center',
            backgroundColor: 'orange'
    
        },





});

export default styles;