import React, {useState} from "react";
import {Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import styles from "./BCreateScreenStyles";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import MatchNowButton from "../../components/MatchNowButton/MatchNowButton";
import BackgroundColor from "../../components/Theme/BackgroundColor"
import BusinessCardPic from "../../components/BusinessCardPic/BusinessCardPic";

const BCreateScreen = () => {
    
    //onChangeText={newText => setText(newText)}



    const [slogan, setSlogan] = useState("");
    const [text, setText] = useState("");

    const SubmitCard = async() =>{
        
        try{
            
            await fetch('https://webhook.site/6c797a03-a64e-428d-87c4-e2e0a08d7d9f', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    name: text,
                    slogan: 'the only place where   get crabs and smile',
                    website: "www.crabs.com"
                })
                })


        } catch (e) {
            
             console.log(e)
       
        }
        
    }

     return(
        
        <BackgroundColor>
        
        <View style ={{flex:1}}>

            <View style ={{
                height: 50, 
                justifyContent:"center",
                
                alignItems:"center",
                margin:5}}
                >
                <Text style ={styles.text}>Edit Your Card</Text>
                
            </View>

            <View style={{
                height:200, 
                width: 350, 
                
                alignSelf:"center",
                margin: 10,
                alignItems:"center",
                justifyContent:"center",
                borderRadius: 35}}>

                <BusinessCardPic/>
                    




            </View>


            <View style ={{
                height: 335,
                
                width: 350,
                alignSelf:"center",
                
            }}>


            <View style={{
                margin: 5,
                height:75,
               
            }}>
                <Text>Title:</Text>
                <TextInput style ={{
                    height:25,
                    borderWidth:1,
                    width: 200,
                    borderRadius: 10,
                    margin: 5
                }}/>
                

            </View>




            <View style={{
                margin: 5,
                height:75,
                

            }}>
                <Text>Founded:</Text>
                <TextInput style ={{
                    height:25,
                    borderWidth:1,
                    width: 200,
                    borderRadius: 10,
                    margin: 5
                }}/>
                

            </View>






            <View style={{
                margin: 5,
                height:75,
                

            }}>
                <Text>Bio:</Text>
                <TextInput style ={{
                    height:25,
                    borderWidth:1,
                    width: 200,
                    borderRadius: 10,
                    margin: 5
                }}/>


                
                

            </View>





            <View style={{
                margin: 5,
                height:75,
                

            }}>
                <Text>Address:</Text>
                <TextInput style ={{
                    height:25,
                    
                    width: 200,
                    borderRadius: 10,
                    borderWidth:1,
                    margin: 5
                }}/>
                

            </View>






            </View>




















        </View>

        </BackgroundColor>
    );
};

export default BCreateScreen;