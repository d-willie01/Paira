import React, {useState} from "react";
import {Text, TouchableOpacity, View, ScrollView, Button} from 'react-native'
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import { useNavigation } from "@react-navigation/native";
import PressTest from "../components/PressTest/PressTest";
import KeyWordButton from "../components/KeyWordButton/KeyWordButton";
import BackgroundColor from "../components/Theme/BackgroundColor";

const CategoryOneScreen = () => {
    
    const UMatchnavigation = useNavigation();
    
    const MatchCategoryOne = () =>{
           
        UMatchnavigation.navigate("MatchCategoryOneScreen")
    }




    // const staticCardKeys = ["club", "alcohol", "kids", "animals"];
    // const [cardKeys, setCardKeys] = useState([]);
    
    // const SetValue1 = (keyword) => {


    //     for(i=0; i<staticCardKeys; i++){
    //         if
    //     }
            
            
        



    // };

    const [cardKeys, setCardKeys] = useState([]);


    const SetValue1 = (keywords) => {

        
        setCardKeys([...cardKeys, keywords]);



    };


    const SetValue2 = (keywords) => {

        
        setCardKeys([...cardKeys, keywords]);



    };



    const SetValue3 = (keywords) => {


        
        setCardKeys([...cardKeys, keywords]);


    };


    const SetValue4 = (keywords) => {


        setCardKeys([...cardKeys, keywords]);



    };



    const ConsoleTest = () => {
        console.log(cardKeys);
    }



  


    
    
    const consoleTest = () =>{
        console.log(cardKeys);

    }







    
        





    
    return(

            <BackgroundColor>

                    <View style={{
                        flex: 1, 
                        backgroundColor: "transparent"
                        }}>
                
                

                
                
                <View >
                    <ScrollView horizontal ={true} showsHorizontalScrollIndicator ={false}
                    
                    style ={{
                        marginTop: 100,
                        
                        flexDirection:"row"
                
                    }}>
                        <View style ={{
                        
                        justifyContent:"space-between",
                        
                        
                        
                    }}>
                    <KeyWordButton text="club" onPress={() =>SetValue1("club")}/>
                    
                    <KeyWordButton text="alcohol" onPress={() =>SetValue2("alcohol") }/>
                
                    <KeyWordButton text="kids" onPress={() =>SetValue3("kids") }/>
                
                    <KeyWordButton text ="animals" onPress={() =>SetValue4("animals") }/>

                    <Button title ="Press Me" onPress={consoleTest}/>
                
                    </View>
                
                
                    <View style ={{
                        
                        justifyContent:"space-between",
                        
                        
                        
                    }}>
                    <KeyWordButton text="Movies"/>
                    
                    <KeyWordButton text="Music"/>
                
                    <KeyWordButton text="Concerts"/>
                
                    <KeyWordButton text ="Cars"/>
                
                    </View>
                    <View style ={{
                        
                        justifyContent:"space-between",
                        
                        
                        
                    }}>
                    <KeyWordButton text="Adult"/>
                    
                    <KeyWordButton text="Women"/>
                
                    <KeyWordButton text="Men"/>
                
                    <KeyWordButton text ="Shopping"/>
                
                    </View>
                    <View style ={{
                        
                        justifyContent:"space-between",
                        
                        
                        
                    }}>
                    <KeyWordButton text="Food"/>
                    
                    <KeyWordButton text="Fashion"/>
                
                    <KeyWordButton text="Games"/>
                
                    <KeyWordButton text ="Arcade"/>
                
                    </View>
                    <View style ={{
                        
                        justifyContent:"space-between",
                        
                        
                        
                    }}>
                    <KeyWordButton text="Food"/>
                    
                    <KeyWordButton text="Fashion"/>
                
                    <KeyWordButton text="Games"/>
                
                    <KeyWordButton text ="Arcade"/>
                
                    </View>
                    <View style ={{
                        
                        justifyContent:"space-between",
                        
                        
                        
                    }}>
                    <KeyWordButton text="Food"/>
                    
                    <KeyWordButton text="Fashion"/>
                
                    <KeyWordButton text="Games"/>
                
                    <KeyWordButton text ="Arcade"/>
                

                    </View>
                
                    </ScrollView>
                
                    </View>
                
                        
                    
                
                
                
                
                    
                
                    
                    
                    
                    
                    
                    
                    <View 
                        
                        style ={{
                        width:100,
                        position : "absolute",
                        bottom: 100, 
                        alignSelf:"center",
                        
                    }}>
                        <MatchNowButton onPress={MatchCategoryOne}/>
                        </View>
                        </View>

                    
            </BackgroundColor>



       
        
    );
};

export default CategoryOneScreen;