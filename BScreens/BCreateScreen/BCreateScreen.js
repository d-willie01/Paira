import React, {useState} from "react";
import {Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import styles from "./BCreateScreenStyles";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import MatchNowButton from "../../components/MatchNowButton/MatchNowButton";

const BCreateScreen = () => {
    
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
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    onChangeText={newText => setText(newText)} 
                    style={{
                                fontSize: 20,
                                height: 55,
                                width: 300,
                                borderRadius: 75,
                                fontWeight: "900",
                                opacity: 0.7,
                                color: 'black',
                                borderWidth: 5,
                                borderColor:"black"
                                }}
                    placeholderTextColor="black"
                    placeholder = "Email/Phone Number">
                </TextInput>
            </View>
            <View>
                <TouchableOpacity 
                    style ={{
                        width : 200,
                        height : 50,
                        backgroundColor:"green"
                }} onPress={SubmitCard}>
                    
                    <Text>Submit</Text>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default BCreateScreen;