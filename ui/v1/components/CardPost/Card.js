import React from "react-native";
import { TouchableOpacity, SafeAreaView, Text, View, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./CardStyles";

const Card = (props) =>{
    
    console.log(props);
    const card = props.card;

    return(
        <View style ={styles.cardcontainer}>
            {/*Image up to three */}
            <Image
            style={styles.image}
            source={{uri: card.image}} />
 
            
            {/*title/name */}

            <Text style= {styles.title}>{card.title}</Text>

             {/* Year created */ }
             <Text style={styles.founded}>{card.founded}</Text>


           
           
            {/*Bio */}
            <Text style={styles.bio}>{card.bio}
             </Text>



            
            {/*Location/Links */}
            <Text style={styles.address}>
                {card.address}
                
            </Text>

            <Text style={styles.link}>
            {card.link}
            </Text>

        </View>
        
    )
}
export default Card;