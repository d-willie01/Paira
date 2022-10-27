import React from "react";
import {Text, SafeAreaView, Button, TouchableOpacity, View} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import { ScrollView } from "react-native";
import MatchCategoryFiveScreen from "./MatchCategoryFiveScreen";
import CategoryFiveScreen from "./CategoryFiveScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 





const UserMatchScreen = () => {

    const UMatchnavigation = useNavigation();
        
    const CategoryOneScreen = () =>{
           
            UMatchnavigation.navigate("MatchCategoryOneScreen")
    }
    
    const CategoryTwoScreen = () =>{
           
        UMatchnavigation.navigate("CategoryTwoWords")
    }
    
    const CategoryThreeScreen = () =>{
           
        UMatchnavigation.navigate("MatchCategoryThreeScreen")
    }
    
    const CategoryFourScreen = () =>{
           
        UMatchnavigation.navigate("MatchCategoryFourScreen")
    }
    
    const CategoryFiveScreen = () =>{
           
        UMatchnavigation.navigate("MatchCategoryFiveScreen")
    }
   
   
   
   
   
    return(

<LinearGradient // background gradient view
        style={styles.container}
        colors={['#B1B1B3','#CACACC',]}>
       
        <SafeAreaView>

<ScrollView style={{
        backgroundColor:'transparent',
        flexDirection:'column',
        height:2000,
}}


> 

        <TouchableOpacity
//Food Button Location - Category 1
          style={{
              marginTop:30,
              marginLeft:181,
              position:'absolute',
            }}
//button function
            onPress={CategoryOneScreen}>
        
                <View
//Button Style
                     style={styles.MatchCategoryParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.MatchCategorygrad}>
                        <MaterialCommunityIcons name="food-fork-drink" size={40} color="white" />
                        <Text style = {{ color: "white", fontSize: 20, fontWeight: '900', fontStyle: "italic"}}> Food </Text>
                   </LinearGradient>
                </View>
             </TouchableOpacity>
            
         <TouchableOpacity 
//Entertainment Button Location - Category 2
          style={{
              marginTop:170,
              marginLeft:75,
              position:'absolute',}}
//button function
            onPress={CategoryTwoScreen}>
                <View
//Button Style
                     style={styles.MatchCategoryParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.MatchCategorygrad}>
                        <FontAwesome name="play-circle-o" size={40} color="white" />
                        <Text style = {{ color: "white", fontSize: 18, fontWeight: '900', fontStyle: "italic"}}> Entertainment </Text>

                   </LinearGradient>
                </View>
        </TouchableOpacity>
        <TouchableOpacity 
//Activities Button Location - Category 3
          style={{
              marginTop:310,
              marginLeft:175,
              position:'absolute',}}
//button function
            onPress={CategoryThreeScreen}>
                <View
//Button Style
                     style={styles.MatchCategoryParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.MatchCategorygrad}>
                        <FontAwesome5 name="mountain" size={34} color="white" />
                        <Text style = {{ color: "white", fontSize: 20, fontWeight: '900', fontStyle: "italic"}}> Places </Text>

                   </LinearGradient>
                </View>
        </TouchableOpacity>
       
        <TouchableOpacity 
//Arts and Music Button Location - Category 4
          style={{
              marginTop:450,
              marginLeft:75,
              position:'absolute',}}
//button function
            onPress={CategoryFourScreen}>
                <View
//Button Style
                     style={styles.MatchCategoryParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.MatchCategorygrad}>
                        <View style = {{marginRight: 37, marginBottom: -37,}}>
                            <FontAwesome5 name="guitar" size={42} color="white" />
                            

                        </View>
                        <View style = {{marginLeft: 30, marginBottom: -1, }}>

                            <Ionicons name="color-palette" size={37} color="white"  />

                        </View>
                        <Text style = {{ color: "white", fontSize: 20, fontWeight: '900', fontStyle: "italic"}}> Art & Music</Text>


                   </LinearGradient>
                </View>

                
        </TouchableOpacity>
        
        <TouchableOpacity 
//Sports & Fitness Location - Category 5
          style={{
              marginTop:590,
              marginLeft:175,
              position:'absolute',}}
//button function
            onPress={CategoryFiveScreen}>
                <View
//Button Style
                     style={styles.MatchCategoryParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.MatchCategorygrad}>
                         <View style = {{marginRight: 40, marginBottom: -40}}>
                            <MaterialCommunityIcons name="yoga" size={44} color="white" />                        
                        </View>
                        <View style = {{marginLeft: 40}}>

                            <Ionicons name="american-football" size={39} color="white" />
                        </View>
                        <Text style = {{ color: "white", fontSize: 17, fontWeight: '900', fontStyle: "italic",}}> Sports & Fitness</Text>

                   </LinearGradient>
                </View>             
        </TouchableOpacity>


                <Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:24,
                fontWeight:'900',
                color:'white',
                marginTop:4,
                marginLeft:20,
                width:195,

                }}>
                What are you lookin for?</Text>
               
                <Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:22,
                fontWeight:'900',
                color:'grey',
                marginTop:85,
                marginLeft:53,
                width:300,

                }}>
                Hungry?</Text>
                
                <Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:20,
                fontWeight:'900',
                color:'grey',
                marginTop:220,
                marginLeft:260,
                width:160,

                }}>
                Old town... again? </Text>
                
                <Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:20,
                fontWeight:'900',
                color:'grey',
                marginTop:360,
                marginLeft:40,
                width:160,

                }}>
                Looking for adventure? </Text>

                <Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:20,
                fontWeight:'900',
                color:'grey',
                marginTop:500,
                marginLeft:260,
                width:160,

                }}>
                Creativity is key. </Text>
                <Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:20,
                fontWeight:'900',
                color:'grey',
                marginTop:650,
                marginLeft:25,
                width:160,

                }}>
                Yeah let's get right. </Text>
</ScrollView>
                </SafeAreaView>
        </LinearGradient>
    );
};

export default UserMatchScreen;