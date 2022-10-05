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
        backgroundColor: '#D5D5D5',
        
        
        
        
        

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

    customAlign: {}






});

export default styles;