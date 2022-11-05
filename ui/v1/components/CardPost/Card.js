import React, {useState} from "react";
import { TouchableOpacity, SafeAreaView, Text, View, Image, Pressable} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./CardStyles";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import BackgroundColor from "../Theme/BackgroundColor";


const Card = (props) =>{

    const [liked, setLiked] = useState(null);
   
    
    
    const cardInfo = props.card;

    return(
    <BackgroundColor>
        <SafeAreaView style ={{
            height: heightPercentageToDP('100%'),
            width: widthPercentageToDP('100%') }}>
            {/*Image up to three */}

            
                
            
            
            <View style ={{
                width:'100%',
                height:'50%',
                alignItems:"center",
                backgroundColor:'transparent',
                justifyContent:'center',

            }}>
            <Image
            style={styles.image}
            source={{uri: 'https://picsum.photos/200/300'}} />
        </View>
 
            
            
            {/*title/name */}
           
    <View style ={{height:'8%',
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
                    

               }}>
                        <Text style= {styles.title}>{cardInfo?.title ?? ""}</Text>

                        {/* Year created */ }
                        <Text style={styles.founded}>2065</Text>
             
        </LinearGradient>
    </View>


           
           
            {/*Bio */}
        <View style ={{ height:'8%',
                width:'100%',
                backgroundColor:'transparent',
                marginTop:'2%',}}>
                    <Text style={styles.bio}>{cardInfo?.description ?? ""}
                    </Text>
        </View>



            
            {/*Location/Links */}
<View style ={{
                    height:'8%',
                    width:'100%',
                    backgroundColor:'transparent',
                    flexDirection:'row',
                    justifyContent:'space-evenly',}}>
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
                            8888 Test Ln.
                            
                        </Text>
            </LinearGradient>
        </View>

            
            

        <View style ={{height:'70%',
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

                            www.TestLink.com
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
        


                <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                    <MaterialCommunityIcons
                        name={liked ? "heart" : "heart-outline"}
                        size={50}
                        color={liked ? "orange" : "white"}
                    />
                    </Pressable>








            </View>

            

        </SafeAreaView>
</BackgroundColor>
    )
}
export default Card;