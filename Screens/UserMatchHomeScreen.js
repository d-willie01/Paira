import React from "react";
import {Text, SafeAreaView, Button, TouchableOpacity} from 'react-native'
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
       
       
        <SafeAreaView style={{justifyContent:'center', alignItems: 'center'}}>
            
            
            
            <TouchableOpacity onPress={CategoryOneScreen} style={{
                borderRadius: 25,
                marginVertical: 25,
                height: 100,
                width: 100,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: 'center'
            }}>
                <Text style={{color:"#ffffff"}}>Food</Text>

            </TouchableOpacity>
           
           
           
            <TouchableOpacity onPress={CategoryTwoScreen} style={{
                borderRadius: 25,
                marginVertical: 25,
                height: 100,
                width: 100,
                backgroundColor: "green",
                alignItems: "center",
                justifyContent: 'center'
            }}>

                <Text style={{color:"#ffffff"}}>Food</Text>

            </TouchableOpacity>
           
           
           
            <TouchableOpacity onPress={CategoryThreeScreen} style={{
                borderRadius: 25,
                marginVertical: 25,
                height: 100,
                width: 100,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: 'center'
            }}>
             
             <Text style={{color:"#ffffff"}}>Food</Text>
            
            </TouchableOpacity> 
            
            
            
            
            
            <TouchableOpacity onPress={CategoryFourScreen} style={{
                borderRadius: 25,
                marginVertical: 25,
                height: 100,
                width: 100,
                backgroundColor: "blue",
                alignItems: "center",
                justifyContent: 'center'
            }}>
            
            <Text style={{color:"#ffffff"}}>Food</Text>

            </TouchableOpacity>


        </SafeAreaView>
    );
};

export default UserMatchScreen;