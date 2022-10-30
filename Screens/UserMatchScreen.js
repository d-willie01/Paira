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
import { MaterialIcons } from '@expo/vector-icons';
import BackgroundColor from "../components/Theme/BackgroundColor";





const UserMatchScreen = () => {

    const UMatchnavigation = useNavigation();
        
    const CategoryOneScreen = () =>{
           
            UMatchnavigation.navigate("CategoryOneWords")
    }
    
    const CategoryTwoScreen = () =>{
           
        UMatchnavigation.navigate("CategoryTwoWords")
    }
    
    const CategoryThreeScreen = () =>{
           
        UMatchnavigation.navigate("CategoryThreeWords")
    }
    
    const CategoryFourScreen = () =>{
           
        UMatchnavigation.navigate("CategoryFourWords")
    }
    
    const CategoryFiveScreen = () =>{
           
        UMatchnavigation.navigate("CategoryFiveWords")
    }
   
   
   
   
   
    return(

<BackgroundColor>
       
        <SafeAreaView style ={{flex:1}}>

<ScrollView style={{
        backgroundColor:'transparent',
        flexDirection:'column',
        flex: 1
        
}}


> 

        <TouchableOpacity
//Food Button Location - Category 1
          style={{
              marginTop:30,
              marginLeft:180,
            }}
//button function
            onPress={CategoryOneScreen}>
        
                <View
                
//Button Style
                     style={styles.MatchCategoryParent}>
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.MatchCategorygrad}>
                        <MaterialCommunityIcons name="food-fork-drink" size={38} color="white" />
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
                        <MaterialCommunityIcons name="party-popper" size={35} color="white" />
                        <Text style = {{ color: "white", fontSize: 16, fontWeight: '900', fontStyle: "italic"}}> Entertainment </Text>

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
                        <MaterialCommunityIcons name="store" size={35} color="white" />
                        <Text style = {{ color: "white", fontSize: 18, fontWeight: '900', fontStyle: "italic"}}> Retail </Text>

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
                     style={styles.MatchCategoryParent}
                     >
                    <LinearGradient
                     colors={['#F8C471','#F5B041']}
                     style={styles.MatchCategorygrad}>
                        
                        <View style = {{marginLeft: 6, marginBottom: 2, }}>

                        <MaterialIcons name="volunteer-activism" size={30} color="white" />

                        </View>
                        <Text style = {{ color: "white", fontSize: 17, fontWeight: '900', fontStyle: "italic"}}> Non-Profit</Text>


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
                         <View style = {{marginRight: 30, marginBottom: -34}}>
                            <MaterialCommunityIcons name="yoga" size={34} color="white" />                        
                        </View>
                        <View style = {{marginLeft: 40}}>

                            <Ionicons name="american-football" size={26} color="white" style={{marginLeft:-13, marginTop:4}} />
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
                marginTop:7,
                marginLeft:20,
                width:250,

                }}>
                Exploring local starts here.</Text>
               
                <Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:15,
                fontWeight:'900',
                color:'white',
                marginTop:90,
                marginLeft:53,
                width:300,

                }}>
                Hungry?</Text>
                
                <Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:15,
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
                Build up your community! </Text>
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
        </BackgroundColor>
    );
};

export default UserMatchScreen;