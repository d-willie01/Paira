import React from "react-native";
import { TouchableOpacity, SafeAreaView, Text, View, Image} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import styles from "./BCardStyles";
import KeyWordButton from "../../KeyWordButton/KeyWordButton";
import { useNavigation } from "@react-navigation/native";




const Card = (props) =>{

    const cardInfo = props.card;
    
    
    
    const UNavigation = useNavigation();
    
    
    

    




    const DeleteCard = () =>{










    }


    const EditOneCardScreen = () =>{

            UNavigation.navigate("EditOneCardScreen")




    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    return(
        
        <View style ={styles.cardcontainer}>
            {/*Image up to three */}

            <View style={{
                height:30,
                alignItems:"center"
                

            }}>
                
                <TouchableOpacity onPress={DeleteCard}>
                <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>


            </View>
            
            
            
            <View style={{
                
                height: 300,
                alignItems:"center"
            }}>
            <Image
            style={styles.image}
            source={{uri: 'https://picsum.photos/200/300'}}/>
            </View>
 
            
            {/*title/name */}



            <View style={{
                
            }}>
            <Text style= {styles.title}>{cardInfo?.title ?? ""}</Text>
            

             {/* Year created */ }
             <Text style={styles.founded}>1999</Text>
             </View>


           
           
            {/*Bio */}
            <View style={{
                
            }}>
            <Text style={styles.bio}>{cardInfo?.description ?? ""}
             </Text>
             </View>



            
            {/*Location/Links */}
            <View style={{
                alignItems:"center",
                height:25
            }}>
            <Text style={styles.address}>
                7738 S Titanite Ln
                
            </Text>
            </View>



            <View style={{
               
            }}>
            <Text style={styles.link}>
            www.test.link
            </Text>
            </View>


            <View style ={{
                height:100,
                flexDirection:"row",
                justifyContent:"center"
                
            }}>

                <KeyWordButton text="Edit card" onPress={EditOneCardScreen}/>




            </View>

        </View>
        
    )
}
export default Card;