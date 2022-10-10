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
            <View style={{flex: .7, backgroundColor: "white", flexDirection:'row'}}>
                <View style={{
                    flex: 1,
                    width: 125,
                    backgroundColor: '#D5D5D5',
                    

                }}>
                    <View style={{
                            flex:.8,
                            backgroundColor:"#D5D5D5",
                            marginTop:47,
                            marginLeft:41

                        }}>
                            <AddProfileButton/>
                        
                    </View>
                    <View style={{
                            justifyContent:"center",
                            alignItems: "center",
                            flex:.17,
                            backgroundColor:"#D5D5D5"
                        }}>
                            <Text style={{
                                
                                fontWeight: "bold",
                                color: '#ffffff',
                                fontSize:17
                            }}>Breaben Bolton</Text>

                    </View>
                    <View style={{
                            flex:.18,
                            backgroundColor:"#D5D5D5",
                            alignItems: "center"
                        }}>
                            <Text style={{
                                
                                fontWeight: "bold",
                                color: '#ffffff'
                            }}>Phoenix, AZ</Text>
                            

                    </View>


                    

                </View>
                <View style={{
                    
                    width: 185,
                    backgroundColor: '#D5D5D5'
                  
                  
                  }}>
                    <Text style={{
                            alignSelf: "flex-start",
                            fontWeight: "bold",
                            fontSize: 23,
                            color: '#ffffff',
                            height: 30,
                            width: 185,
                            backgroundColor: "#D5D5D5",
                            marginTop:15,
                            marginLeft:-185 
                            

                            
                            
                        }}>
                                Welcome Back,
                        </Text>
                        <TouchableOpacity style={{
                            height: 80,
                            width: 120,
                            borderRadius: 25,
                            backgroundColor: "grey",
                            justifyContent:'center',
                            alignItems:'center',
                            
                            marginLeft: 35,
                            marginTop: 20

                            
                        
                        }}>
                            <Text style={{
                                    fontSize: 45,
                                    
                                    fontWeight: "bold",
                                    color: '#ffffff'}}>520</Text>

                            


                        </TouchableOpacity>

                </View>
                <View style={{
                    width: 40,
                    backgroundColor: '#D5D5D5',
                    
                    
                    }}>
                        <ChallengesButton/>
                        <NotificationsButton/>
                        

                </View>

            </View >
            <View style={{flex: .5, backgroundColor: "#D5D5D5", flexDirection:'row'}}>
                <View style={{
                    width: 250,
                    backgroundColor: "#D5D5D5",
                    marginTop:38
                    

                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: "grey",
                            height: 100,
                            width: 175,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent:'center',
                            marginLeft:30,


                        }}>
                            <Text style={{
                                    fontSize: 14,
                                    fontStyle: 'italic',
                                    fontWeight: "bold",
                                    color: '#ffffff'}}>Tip of the Day!</Text>


                            <Text style={{
                                    fontSize: 14,
                                    fontStyle: 'italic',
                                    fontWeight: "bold",
                                    color: '#ffffff'}}>Did you know you can earn points for inviting friends!</Text>
                            
                            

                        

                        </TouchableOpacity>

                    


                </View>

                <View style={{
                    width: 150,
                    height:150,
                    backgroundColor: "#D5D5D5",
                    marginBottom:50,
                    borderRadius:20,
                    marginRight:30


                }}>
                    <TouchableOpacity onPress={AddKeyWordsScreen} style={{
                        height: 100,
                        width: 100,
                        backgroundColor: "orange",
                        justifyContent: 'center',
                        alignItems:'center',
                        borderRadius:300,
                        height:150,
                        width:150

                    }}>
                        <Text style={{
                                    fontSize: 25,
                                    fontWeight: "bold",
                                    color: '#ffffff'}}>Interests</Text>

                    </TouchableOpacity>

                </View>
                

            </View>
            
            
        </SafeAreaView>
      
        <ScrollView horizontal= {true}  style={styles.container3D}>
            <View style={styles.viewTest}>
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