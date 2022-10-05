import React from "react";
import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    containerD: {
        flex: 1,
         
        
    },
    container4D: {
        
        flexDirection: 'row',
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
        

    },
    container2D:{
        flex: .5,
        backgroundColor: 'yellow',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
        
        
        
        
        
    },
    container3D: {
        flex: .5,
        backgroundColor: 'blue',
        
        
        
        
        

    },

    buttonD:{
        backgroundColor: 'orange',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        marginHorizontal: 10,
        marginVertical: 10
        
        


    
    
    },
    textD: {
        marginVertical: 10,
        
        color: '#ffffff',
        height: 45,
        fontSize: 40
        
    
    
    },

    longbuttonD: {
        marginVertical: 25,
        backgroundColor: 'orange',
        width: 150,
        height: 300,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: "flex-end",
        marginHorizontal: 15,

    },

    viewTest: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    customAlign: {},

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