import React, {useState} from "react";
import { TouchableOpacity, SafeAreaView, Text, View, Image, Pressable} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./CardStyles";

const Card = (props) =>{

    const [liked, setLiked] = useState(null);
   
    
    
    const cardInfo = props.card;

    return(
        
        <View style ={styles.cardcontainer}>
            {/*Image up to three */}
            
            
            <View style ={{}}>
            <Image
            style={styles.image}
            source={{uri: 'https://picsum.photos/200/300'}} />
            </View>
 
            
            
            {/*title/name */}
           
            <View style ={{}}>
            <Text style= {styles.title}>{cardInfo?.title ?? ""}</Text>

             {/* Year created */ }
             <Text style={styles.founded}>2065</Text>
             </View>


           
           
            {/*Bio */}
            <View style ={{}}>
            <Text style={styles.bio}>{cardInfo?.description ?? ""}
             </Text>
             </View>



            
            {/*Location/Links */}
            <View style ={{}}>
            <Text style={styles.address}>
                8888 Test Ln.
                
            </Text>
            </View>
            

            <View style ={{}}>
            <Text style={styles.link}>
            www.TestLink.com
            </Text>
            </View>


            <View style ={{
                height: 75,
                
                alignItems:"center"


            }}>


                <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                    <MaterialCommunityIcons
                        name={liked ? "heart" : "heart-outline"}
                        size={50}
                        color={liked ? "orange" : "white"}
                    />
                    </Pressable>








            </View>

            

        </View>
        
    )
}
export default Card;