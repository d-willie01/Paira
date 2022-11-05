import React from "react";
import { StyleSheet } from "react-native";





const styles = StyleSheet.create({
    cardcontainer:{
        margin:10, 
        width:370, 
        backgroundColor:'white',
        
    
        
    }, 
    image:{
       height: '100%',
       width:"90%",
       borderRadius:10,
       

        
    },
    title:{
        fontWeight: "900",
        fontSize: '35%',
        marginLeft: 0,
        textAlign:'center',
        color:'white'
    },
    
    founded:{
        fontSize:'12%',
        color: "#5b5b5b",
        textAlign:'center',
        
    
        

    },
    bio:{
        textAlign:'center',
        fontSize: '15%',
        fontWeight:'600',
        lineHeight: 20,
        width:'100%',
        
        

        


    },
    address:{
        textAlign:'center',
        fontWeight:"600",
        fontSize:'12%',
        
        

    },
    link:{
        alignSelf:'center',
        color: "dodgerblue",
        textDecorationLine:'underline',
        fontSize:'13%'
    },
    container: {
        flex:1,
        backgroundColor:'#D5D5D5',
        paddingTop: Platform.OS ==='android' ? StatusBar.currentHeight:0,
    },

    BCardBackgroundgrad:{
        position:'absolute',
        height:700,
        width:400,
        borderRadius:20,
        bottom:5,

    },
    BCardBackgroundParent:{
        position:'absolute',
        height:700,
        width:400,
        borderRadius:20,
        backgroundColor:'#CACACC',
    },

})

export default styles;