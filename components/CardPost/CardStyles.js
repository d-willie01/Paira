import React from "react";
import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    container:{
        margin:10
        
    }, 
    image:{
       width: "100%",
       aspectRatio: 3/2,
       resizeMode: "cover",
       borderRadius: 10

        
    },
    founded:{
        marginTop:10,
        color: "#5b5b5b"

    },
    title:{
        fontWeight: "600",
        fontSize: 25,
        marginVertical: 5
        

    },
    bio:{
        fontSize: 18,
        lineHeight: 20

    },
    address:{
        fontWeight:"600",
        marginVertical:5
        

    },
    link:{
        color: "blue"
    }
})

export default styles;