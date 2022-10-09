import React from "react";
import {Text, SafeAreaView, Button, TouchableOpacity, View} from 'react-native'
import { useNavigation } from "@react-navigation/native";

const UserMatchScreen = () => {

    const UMatchnavigation = useNavigation();
        
    const CategoryOneScreen = () =>{
           
            UMatchnavigation.navigate("MatchCategoryOneScreen")
    }
    
    const CategoryTwoScreen = () =>{
           
        UMatchnavigation.navigate("MatchCategoryTwoScreen")
    }
    
    const CategoryThreeScreen = () =>{
           
        UMatchnavigation.navigate("MatchCategoryThreeScreen")
    }
    
    const CategoryFourScreen = () =>{
           
        UMatchnavigation.navigate("MatchCategoryFourScreen")
    }
   
   
   
   
   
    return(
       
       
        <SafeAreaView style={{backgroundColor:"black", flex: 1}}>
            
           <View style={{
                    flex: .22,
                    backgroundColor: "red",
                    justifyContent:'center'

                }}>
                     <TouchableOpacity onPress={CategoryOneScreen} style={{
                            borderRadius: 75,
                            marginVertical: 25,
                            marginLeft: 50,
                            height: 140,
                            width: 140,
                            backgroundColor: "black",
                            alignItems: "center",
                            justifyContent: 'center'
                            }}>
                            <Text style={{color:"#ffffff"}}>Food</Text>
                    </TouchableOpacity>
            </View> 
            <View style={{
                    flex:.22,
                    backgroundColor: "green",
                    alignItems: "flex-end",
                    justifyContent: 'center'
                 }}>
                    <TouchableOpacity onPress={CategoryTwoScreen} style={{
                            borderRadius: 75,
                            marginVertical: 25,
                            marginRight: 50,
                            height: 140,
                            width: 140,
                            backgroundColor: "black",
                            alignItems: "center",
                            justifyContent: 'center'
                            }}>
                            <Text style={{color:"#ffffff"}}>Food</Text>
                    </TouchableOpacity>

            </View>
            <View style={{
                    flex:.22,
                    backgroundColor:"yellow",
                    justifyContent:'center'
                 }}>
                    <TouchableOpacity onPress={CategoryThreeScreen} style={{
                            borderRadius: 74,
                            marginVertical: 25,
                            marginLeft: 50,
                            height: 140,
                            width: 140,
                            backgroundColor: "black",
                            alignItems: "center",
                            justifyContent: 'center'
                            }}>
                            <Text style={{color:"#ffffff"}}>Food</Text>
                    </TouchableOpacity>

            </View>
            <View style={{
                    flex:.22,
                    backgroundColor:"blue",
                    alignItems:'flex-end',
                    justifyContent:'center'
                    
                 }}>
                    <TouchableOpacity onPress={CategoryFourScreen} style={{
                            borderRadius: 75,
                            marginVertical: 25,
                            marginRight: 50,
                            height: 140,
                            width: 140,
                            backgroundColor: "black",
                            alignItems: "center",
                            justifyContent: 'center'
                            }}>
                            <Text style={{color:"#ffffff"}}>Food</Text>
                    </TouchableOpacity>

            </View>

            
           
            
            
            
            
            
           


        </SafeAreaView>
    );
};

export default UserMatchScreen;