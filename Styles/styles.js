import React from "react";
import { StyleSheet,Text, View, Image,TouchableOpacity, SafeAreaView, StatusBar, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';






const styles = StyleSheet.create({
    containerD: {
        flex: 1
        

    },
    container2D:{
        flex: .8,
        backgroundColor: '#D5D5D5',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
        
        
        
        
        
    },
    container3D: {
        flex: 1,
        backgroundColor: '#D5D5D5',
        
        
        
        
        

    },

    buttonD:{
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        marginHorizontal: 10,
        marginVertical: 10,
        
        


    
    
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
    picture:{
        height:75,
        width:75
    },
    container: {
        flex:1,
        backgroundColor:'#D5D5D5',
        paddingTop: Platform.OS ==='android' ? StatusBar.currentHeight:0,
        
    },
    interestbuttongrad:{
        position:'absolute',
        height:165,
        width:150,
        borderRadius:20,
        justifyContent:'center',
        bottom:5,

    },
    interestbuttonParent:{
        position:'absolute',
        height:165,
        width:152,
        borderRadius:20,
        backgroundColor:'#F39C12',
    },
    profileinfograd:{
        bottom:5, 
        height:150,
        width:170,
        borderRadius:50,
        alignItems:'center'
          

    },
    profileinfoParent:{
        height:150,
        width:170,
        borderRadius:50,
        backgroundColor:'#F39C12',
        alignItems:'center'
        
    },
    TipoftheDaygrad:{
        bottom:5, 
        height:160,
        width:210,
        justifyContent:'center',
        borderRadius:60,  

    },
    TipoftheDayParent:{
        height:160,
        width:210,
        borderRadius:60,
        justifyContent:'center',
        backgroundColor:'#F39C12',
    },
    TOPofileBackgroundgrad:{
        position:'absolute',
        height:225,
        width:400,
        borderRadius:60,
        justifyContent:'center',
        bottom:5,   

    },
    TOProfileBackgroundParent:{
        position:'absolute',
        marginTop:95,
        marginLeft:13,
        height:225,
        width:403,
        borderRadius:60,
        backgroundColor:'#F39C12',
    },
    MatchCategorygrad:{
        bottom:4, 
        marginLeft:-2,
        height:150,
        width:170,
        borderRadius:75,  
        justifyContent:'center',

    },
    MatchCategoryParent:{
        height:150,
        width:170,
        borderRadius:75,
        backgroundColor:'#F39C12',
    },
    
});


export default styles;