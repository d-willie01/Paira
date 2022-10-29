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
        justifyContent: "space-between",
    },

    customAlign: {},

        containerT: {
            flex: 1,
            backgroundColor: 'black',
            
    
        },
        container2T: {
            flex: 1,
            backgroundColor: 'transparent',

            
    
        },
        registerText:{
            fontSize: 25,
            
            fontWeight: "900",
            color: '#ffffff'},
        registerbuttonForground:{
            height: 55,
            width: 300,
            borderRadius: 75,
            justifyContent:'center',
            alignItems:'center',
            },
        registerbuttonBackground:{
            height: 60,
            width: 250,
            borderRadius: 75,
            alignItems:'center',
            marginBottom: 20,
            marginLeft: 10,},
        headerT: {
            backgroundColor: 'orange',
            
            alignItems: 'center',    
        },
        footerT: {
            flex: 9,
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
            marginTop: 20,
            fontSize: 35,
            fontWeight: 'bold'
        },
    
        button_T: {
            alignItems: 'center',
            backgroundColor: 'orange'
    
        },

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
        marginBottom: 20,
    },
    textInputLargeT: {
        borderWidth: 1,
        borderColor:'#777',
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: "#50375a",
        margin: 8,
        width: 300,
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


    picture:{
        height:75,
        width:75
    },
    container: {
        flex:1,
        backgroundColor:'#D5D5D5',
        paddingTop: Platform.OS ==='android' ? StatusBar.currentHeight:0,
        
    },
    businessHeaderBackground:{
        height: 240,
        width: 400,
        borderRadius: 25,
        alignItems:'center',
        marginTop: 3,
        marginLeft: 10
    },
    userProfileButton:{
        height: 205, 
        width: 205,
        marginLeft:112,
        marginTop: 105, 
        borderRadius:100,
        position:"absolute",
        backgroundColor: "#F39C12"
    },
    businessProfileButton:{
        height: 160, 
        width: 160,
        marginTop: 40,
        borderRadius:100,
        marginLeft: 10,
        position:"absolute",
        justifyContent:'center',
        backgroundColor: "#F39C12"
    },
    businessHSHeaderText:{ 
        fontSize: 25, 
        fontWeight: '900', 
        justifyContent: 'flex-start', 
        marginTop: 5, 
        marginLeft:200, 
        color: 'white'},
    businessHSsubHeaderText:{
        color: 'white', 
        fontWeight: '900', 
        marginTop: 15, 
        marginLeft: 10, 
        fontSize: 20
    },
    businessHSwidgetstext:{fontSize: 25,
        fontWeight: "900",
        color: '#ffffff'},
    tipsTextB:{fontSize:16,
        fontWeight:'800',
        color:'white',
        fontStyle:'italic'},
    BusinessTipsForground:{height:165,
        width:150,
        borderRadius:20,
        justifyContent:'center',},
    BusinessTipsBackground:{height:170,
        width:155,
        borderRadius:20,
        marginRight: 10,
        alignItems: 'center',
        backgroundColor:'#F39C12',},
    addkeywordsTouchableForground:{
        
            height:140,
            width:245,
            justifyContent:'center',
            borderRadius:60,
    },
    addKeywordsTextB:{
        fontSize:25,
                                fontWeight:'900',
                                color:'white',
                                textAlign:'center',
                                alignSelf:'center',
                                fontStyle:'italic'
    },
    businessHeaderForground:{
        height: 235,
        width: 395,
        borderRadius: 25,
        bottom: 5
    },

    buisnessInfoBackground: {height:175,
        width:190,
        borderRadius:50,
        marginTop: 30,
        marginRight: 10,
        bottom: 5,
        alignItems: 'center',},
    buisnessInfoForeground:{height:170,
        width:185,
        borderRadius:50,
        alignItems:'center'},
    subscribersText:{fontSize:18,
        fontWeight:"bold",
        color:'white',
        position:'absolute',
        textAlign:'center',
        marginTop:120,
        marginLeft:35,
    },
    businessNameText:{
        
            fontSize:18,
            fontWeight:'bold',
            color:'white',
            textAlign:'left',
            position:'absolute',
            justifyContent:'flex-start',
            marginTop:20,
            marginLeft:5,
        
            

    },
    companyAdressText:{
        fontSize:18,
                                        fontWeight:'bold',
                                        color:'white',
                                        position:'absolute',
                                        textAlign:'left',
                                        marginTop:50,
                                        marginLeft:5,
    },
    businessTextInfo: {
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        position:'absolute',
        textAlign:'left',
        marginTop:75,
        marginLeft:5,
    },
    addkeywordsTouchable:{
        height:145,
        width:250,
        borderRadius:60,
        marginRight: 10,
        marginTop: 15,
        alignItems: 'center',
        bottom: 5,
        backgroundColor:'#F39C12'
    },
    linearbackgrounBbuttons:{
        height: 80,
        width: 200,
        borderRadius: 50,
        marginTop: 13,
        marginLeft: 10

    },
    linearforgroundButtons:{
        height: 75,
        width: 195,
        borderRadius: 50,
        backgroundColor: "grey",
        justifyContent:'center',
        alignItems:'center',
    },
    interestbuttongrad:{
        position:'absolute',
        height:70,
        width:400,
        borderRadius:20,
        
        bottom:5,

    },
    interestbuttonParent:{
        position:'absolute',
        height:70,
        width:400,
        borderRadius:20,
        backgroundColor:'#F39C12',
    },
    containerCenter: {
        flex:1,
        backgroundColor:'#D5D5D5',
        paddingTop: Platform.OS ==='android' ? StatusBar.currentHeight:0,
        alignItems: 'center',
        
    },
    profileinfograd:{
        bottom:5, 
        height:50,
        width:170,
        borderRadius:50,
        
          

    },
    profileinfoParent:{
        height:50,
        width:170,
        borderRadius:50,
        backgroundColor:'#F39C12',
        
        
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
        alignItems: 'center',

    },
    MatchCategoryParent:{
        height:150,
        width:170,
        
        borderRadius:75,
        backgroundColor:'#F39C12',
    },
    PairaScoregrad:{
        position:'absolute',
        height:55,
        width:150,
        borderRadius:60,
        bottom:5,   

    },
    PairaScoreParent:{
        position:'absolute',
        height:55,
        width:150,
        borderRadius:60,
        backgroundColor:'#F39C12',
    },
    UserLocationgrad:{
        position:'absolute',
        height:55,
        width:150,
        borderRadius:60,
        bottom:5,   

    },
    UserLocationParent:{
        position:'absolute',
        height:55,
        width:150,
        borderRadius:60,
        backgroundColor:'#F39C12',
    },
});


export default styles;