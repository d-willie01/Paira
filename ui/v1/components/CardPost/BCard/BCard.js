import React from "react-native";
import { TouchableOpacity, SafeAreaView, Text, View, Image} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import styles from "./BCardStyles";
import KeyWordButton from "../../KeyWordButton/KeyWordButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import BusinessEditCardButton from "../../BusinessButtons/BusinessEditCardButton";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";





const Card = (props) =>{

    const cardInfo = props.card;
    const [cardId, setCardId] = useState();
    
    
    
    const UNavigation = useNavigation();
    
    
    

    




    const DeleteCard = () =>{



        console.log(cardInfo._id);






    }


    const EditOneCardScreen = async() =>{
            
        console.log(cardInfo._id);
        
            
                
            




    }

    
    
   
    
   
    
    
    
    
    
    
    
    
    return(
        
        <View style={{
            height: heightPercentageToDP('100%'),
            width: widthPercentageToDP('100%') }}>
            {/*Image up to three */}

            <View style={{
                height:'5%',
                width:'100%',
                alignItems:"center",
                backgroundColor:'transparent',
                justifyContent:"center",
                marginTop:'-2%'
                

            }}>
                
                <TouchableOpacity onPress={DeleteCard}>
                <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>


            </View>
            
            
            
            <View style={{
                
                width:'100%',
                height:'40%',
                alignItems:"center",
                backgroundColor:'transparent',
                justifyContent:'center',

            }}>
            <Image
            style={styles.image}
            source={{uri: 'https://picsum.photos/200/300'}}/>
            </View>
 
            
            {/*title/name */}



            <View style={{
                height:'8%',
                width:'80%',
                backgroundColor:'#898989',
                justifyContent:'center',
                alignSelf:'center',
                marginTop:'4%',
                borderRadius:100}}>
               
            <LinearGradient
                    colors={['#898989','#ADADAD']}
                    style={{
                    height:'100%',
                    width:'100%',
                    borderRadius:'40%',
                    bottom:'5%',
                    justifyContent:'center',
                    

               }}><Text style= {styles.title}>{cardInfo?.title ?? ""}</Text>
            

             {/* Year created */ }
             <Text style={styles.founded}>1999</Text>

            </LinearGradient>

        </View>


           
           
            {/*Bio */}
            <View style={{
                height:'8%',
                width:'100%',
                backgroundColor:'transparent',
                marginTop:'2%',
                
            }}>
                 
            <Text style={styles.bio}>{cardInfo?.description ?? ""}
             </Text>
             </View>



            
            {/*Location/Links */}
    <View style={{
        height:'8%',
        width:'100%',
        backgroundColor:'transparent',
        flexDirection:'row',
        justifyContent:'space-evenly',

    }}>
    <View style={{
                height:'70%',
                width:'40%',
                backgroundColor:'#898989',
                justifyContent:'center',
                marginLeft:'2%',
                marginTop:'2%',
                borderRadius:100,}}>
               
        <LinearGradient
                    colors={['#898989','#ADADAD']}
                    style={{
                    height:'100%',
                    width:'100%',
                    borderRadius:'40%',
                    bottom:'5%',
                    justifyContent:'center',
                    
                    }}>

                <Text style={styles.address}>
                7738 S Titanite Ln 
                
                </Text>
        </LinearGradient>
    </View>
    
    
    
    <View style={{
                height:'70%',
                width:'40%',
                backgroundColor:'#898989',
                justifyContent:'space-between',
                marginLeft:'2%',
                marginTop:'2%',
                borderRadius:100,}}>
               
        <LinearGradient
                    colors={['#898989','#ADADAD']}
                    style={{
                    height:'100%',
                    width:'100%',
                    borderRadius:'40%',
                    bottom:'5%',
                    justifyContent:'center',
                    
                    }}>

                 <Text style={styles.link}>
                www.test.link
                 </Text>
        
        
        </LinearGradient>
    </View>
</View>



            <View style ={{
                height:'10%',
                flexDirection:"row",
                justifyContent:"center",
                backgroundColor:'transparent'
                
            }}>

                <BusinessEditCardButton text="Edit card" onPress={() => EditOneCardScreen()}/>




            </View>

        </View>
        
    )
}
export default Card;