import React from "react";
import { StyleSheet } from "react-native";





const styles = StyleSheet.create({
    cardcontainer:{
        margin:10,
        marginTop:130, 
        width:410, 
        backgroundColor:'transparent',
    
        
    }, 
    image:{
       position:'relative',
       marginLeft:20, 
       width:'90%', 
       aspectRatio: 1/1, 
       resizeMode: "cover",
       borderRadius: 10,
       

        
    },
    title:{
        fontWeight: "800",
        fontSize: 34,
        marginTop: 1,
        marginLeft: 0,
        textAlign:'center',
    },
    founded:{
        marginTop:0,
        marginLeft:0,
        fontSize:11,
        color: "#5b5b5b",
        textAlign:'center',
    
        

    },
    bio:{
        textAlign:'center',
        fontSize: 14,
        fontWeight:'600',
        lineHeight: 20, 
        marginTop:10,
        width:375,
        marginLeft:15, 
        

        


    },
    address:{
        alignSelf:'left',
        fontWeight:"600",
        marginLeft:30,
        marginVertical:5
        

    },
    link:{
        alignSelf:'center',
        color: "blue"
    },
    container: {
        flex:1,
        backgroundColor:'#D5D5D5',
        paddingTop: Platform.OS ==='android' ? StatusBar.currentHeight:0,
    },

})

export default styles;