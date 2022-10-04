import React from "react";
import { StyleSheet } from "react-native";




    const styles = StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: 'white',
            
    
        },
        header: {
            backgroundColor: 'orange',
            flex: 1,
            justifyingContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingnBottom: 50
    
        },
        footer: {
            flex: 3,
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
        textInputLarge: {
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
        textInputPhoto: {
            borderWidth: 1,
            borderColor:'#777',
            marginTop: Platform.OS === 'ios' ? 0 : -12,
            paddingLeft: 10,
            color: "#50375a",
            margin: 8,
            width: 150,
            height: 130,
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,

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
            fontWeight: 'light'
        },
    
        title: {
            color: "white",
            marginTop: 30,
            fontSize: 35,
            fontWeight: 'bold'
        },
    
        button_: {
            alignItems: 'center',
            backgroundColor: 'orange'
    
        },
    

    centerItemsMiddleScreen : {
        flex: .1,
         alignItems: "center", 
         justifyContent: "center",
    },
    TopItemsMiddleScreen : {
        flex: .3,
        alignItems: "center", 
        justifyContent: "center",
    },
    BottomItemMiddleScreen : {
        flex: .4,
        alignItems: "center", 
        justifyContent: "center",

    },
    viewTest: {
        backgroundColor: "yellow",
        height: 150,
        width: 170,
        borderRadius: 20,
        marginBottom: 70,
       
    },





});

export default styles;