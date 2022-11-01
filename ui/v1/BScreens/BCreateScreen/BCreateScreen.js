import React, {useState} from "react";
import {Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import styles from "./BCreateScreenStyles";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import MatchNowButton from "../../components/MatchNowButton/MatchNowButton";
import BackgroundColor from "../../components/Theme/BackgroundColor"
import BusinessCardPic from "../../components/BusinessCardPic/BusinessCardPic";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";


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
        
    <SafeAreaView 
    style={{
     height: heightPercentageToDP('100%'),
     width: widthPercentageToDP('100%') }}>
        

        <View  // Top Words View
        
            style ={{
                backgroundColor:'transparent',
                height:'10%',
                width:'80%',
                justifyContent:"center",
                alignItems:"center",
                alignSelf:'center',
                }}
                >
                <Text // Top Words Text

                numberOfLines={3} 
                style ={{
                    fontSize:'20%',
                    fontStyle:'italic',
                    fontWeight:'800',
                    textAlign:'center',
                    color:'white',
                    
                    }}>Edit your card, this is what local users will be seeing!</Text>
                
        </View> 

            <View //View for Add BPics Button
                style={{
                backgroundColor:'transparent',
                height:'40%', 
                width: '100%', 
                alignSelf:"center",
                alignItems:"center",
                justifyContent:"center",
                }}>

                <BusinessCardPic/>
            </View>


    <View // View for Business Information
            style ={{
                height: '40%',
                width: '75%',
                alignSelf:"center",
                backgroundColor:'transparent'
                
                }}>


        <View style={{
                
                height:'25%',
                backgroundColor:'transparent'
               
            }}>
                <Text style={{
                    fontSize:'15%',
                    fontWeight:'800',
                    color:'white',
                    alignSelf:'flex-start',
                    fontStyle:'italic',
                    

                 }}>Title:</Text>
                
                <TextInput style ={{
                    borderColor:'white',
                    height:'30%',
                    width: '100%',
                    borderWidth:'3%',
                    borderRadius: '10%%',
                }}/>
                
        </View>
        
        <View style={{
                
                height:'25%',
                backgroundColor:'transparent'
               
            }}>
                <Text style={{
                    fontSize:'15%',
                    fontWeight:'800',
                    color:'white',
                    alignSelf:'flex-start',
                    fontStyle:'italic',
                    

                 }}>Founded:</Text>
                
                <TextInput style ={{
                    borderColor:'white',
                    height:'30%',
                    width: '100%',
                    borderWidth:'3%',
                    borderRadius: '10%',
                }}/>
                
        </View>


        <View style={{
                
                height:'25%',
                backgroundColor:'transparent'
               
            }}>
                <Text style={{
                    fontSize:'15%',
                    fontWeight:'800',
                    color:'white',
                    alignSelf:'flex-start',
                    fontStyle:'italic',
                    
                    
                    

                 }}>Slogan:</Text>
                
                <TextInput style ={{
                    borderColor:'white',
                    height:'30%',
                    width: '100%',
                    borderWidth:'3%',
                    borderRadius: '10%',
                }}/>
                
        </View>

        <View style={{
                
                height:'25%',
                backgroundColor:'transparent'
               
            }}>
                <Text style={{
                    fontSize:'15%',
                    fontWeight:'800',
                    color:'white',
                    alignSelf:'flex-start',
                    fontStyle:'italic',
                    

                 }}>Address:</Text>
                
                <TextInput style ={{
                    borderColor:'white',
                    height:'30%',
                    width: '100%',
                    borderWidth:'3%',
                    borderRadius: '10%',
                }}/>
                
        </View>

     </View>
     
    </SafeAreaView>
</BackgroundColor>
    );
};

export default BCreateScreen;