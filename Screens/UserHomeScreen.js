import React from "react";
import { 
    SafeAreaView, 
    View, 
    StyleSheet, 
    Text, 
    Image, 
    Button, 
    TouchableOpacity,
    ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/styles";
import ScreenChangeButton from "../components/EditLayoutButton";
import ChallengesButton from "../components/ChallengesButton";
import NotificationsButton from "../components/NotificationsButton";
import PlusButton from "../components/PlusButton";
import CollectionButton from "../components/CollectionsButton";
import AddProfileButton from "../components/AddProfilePicButton";


const UserHomeScreen = () => { 
    
    const Unavigation = useNavigation();

    const AddKeyWordsScreen = () =>{
       
        Unavigation.navigate("AddKeyWordsScreen")

   
}
    return(
    
    <SafeAreaView style={styles.containerD}>
        
        <SafeAreaView style={styles.container2D}>
            <View style={{flex: .6, backgroundColor: "purple", flexDirection:'row'}}>
                <View style={{
                    flex: 1,
                    width: 125,
                    backgroundColor: 'black',
                    

                }}>
                    <View style={{
                            flex:.75,
                            backgroundColor:"orange",
                            alignItems:'center',
                            justifyContent: 'center'

                        }}>
                            <AddProfileButton/>
                        
                    </View>
                    <View style={{
                            justifyContent:"center",
                            alignItems: "center",
                            flex:.15,
                            backgroundColor:"red"
                        }}>
                            <Text style={{
                                
                                fontWeight: "bold",
                                color: '#ffffff'
                            }}>Paira Pup</Text>

                    </View>
                    <View style={{
                            flex:.15,
                            backgroundColor:"black",
                            alignItems: "center"
                        }}>
                            <Text style={{
                                
                                fontWeight: "bold",
                                color: '#ffffff'
                            }}>Phoenix, Az</Text>

                    </View>


                    

                </View>
                <View style={{
                    
                    width: 185,
                    backgroundColor: 'red',
                    
                    
                    }}>
                        <Text style={{
                            alignSelf: "flex-start",
                            fontWeight: "bold",
                            fontSize: 15,
                            color: '#ffffff',
                            height: 25,
                            width: 120,
                            backgroundColor: "black",
                            marginTop:10,
                            justifyContent: "center",

                            
                            
                        }}>
                                Welcome Back
                        </Text>
                        <TouchableOpacity style={{
                            height: 100,
                            width: 115,
                            borderRadius: 50,
                            backgroundColor: "grey",
                            justifyContent:'center',
                            alignItems:'center',
                            
                            marginLeft: 38
                            
                        
                        }}>
                            <Text style={{
                                    fontSize: 45,
                                    
                                    fontWeight: "bold",
                                    color: '#ffffff'}}>520</Text>

                        </TouchableOpacity>

                </View>
                <View style={{
                    width: 40,
                    backgroundColor: 'yellow',
                    
                    
                    }}>
                        <ChallengesButton/>
                        <NotificationsButton/>
                        

                </View>

            </View >
            <View style={{flex: .4, backgroundColor: "green", flexDirection:'row'}}>
                <View style={{
                    width: 200,
                    backgroundColor: "blue",
                    alignItems:'center',
                    justifyContent: "center"

                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: "black",
                            height: 100,
                            width: 175,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent:'center'

                        }}>
                            <Text style={{
                                    fontSize: 15,
                                    fontStyle: 'italic',
                                    fontWeight: "bold",
                                    color: '#ffffff'}}>Most 100% matches happen in the morning!</Text>

                        </TouchableOpacity>

                </View>

                <View style={{
                    width: 150,
                    backgroundColor: "orange",
                    marginLeft: 40,
                    justifyContent:'center',
                    alignItems:"center"

                }}>
                    <TouchableOpacity onPress={AddKeyWordsScreen} style={{
                        height: 100,
                        width: 100,
                        backgroundColor: "black",
                        justifyContent: 'center',
                        alignItems:'center'

                    }}>
                        <Text style={{
                                    fontSize: 15,
                                    fontStyle: 'italic',
                                    fontWeight: "bold",
                                    color: '#ffffff'}}>+KeyWords</Text>

                    </TouchableOpacity>

                </View>
                

            </View>
            
            
        </SafeAreaView>
      
        <ScrollView horizontal= {true}  style={styles.container3D}>
            <View style={styles.viewTest}>
                <CollectionButton text= "Food" source={require('../assets/Icons/FoodCollage.png')}/>
                <CollectionButton text= "Favorites" source={require('../assets/Icons/PairaLogo.png')}/>
                <CollectionButton text= "Volunteer"/>
                <CollectionButton text= "Nature"/>
                <CollectionButton text= "Add New"/>

            </View>
        </ScrollView>
    </SafeAreaView>



    )
}


export default UserHomeScreen;