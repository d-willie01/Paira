import React from "react";
import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    container: {
        flex: 1,
         
        
    },
    container4: {
        flex: .1,
        flexDirection: 'row',
        backgroundColor: 'purple',
        

    },
    container2:{
        flex:.3,
        backgroundColor: 'yellow',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
        
        
        
        
        
    },
    container3: {
        flex: .6,
        backgroundColor: 'blue',
        flexDirection: 'row'
        
        

    },

    button:{
        backgroundColor: 'orange',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        marginHorizontal: 10,
        marginVertical: 10
        
        


    
    
    },
    text: {
        marginVertical: 10,
        backgroundColor: "red",
        color: '#ffffff',
        height: 30,
        fontSize: 25
        
    
    
    },

    longbutton: {
        marginVertical: 25,
        backgroundColor: 'orange',
        width: 150,
        height: 300,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: "flex-end"

    },






});

export default styles;