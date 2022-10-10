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
import CollectionButton from "../components/CollectionsButton";


const BusinessHomeScreen = () => { 
    /*
    const Unavigation = useNavigation();
    

    const AddKeyWordsScreen = () =>{
       
        Unavigation.navigate("AddKeyWordsScreen")

   
}*/
    return(
    
    <SafeAreaView style={styles.containerT}>
        
        <SafeAreaView style={styles.container2T}>
            <View>
                <Text style = {{ fontSize: 30, justifyContent: "bottom", marginTop: 25, fontWeight: 'bold', color: 'white'}}> 
                Welcome Back 
                </Text>
            </View>
            <View style= {{flex: .05}}>
                <Text style={{
                                alignSelf: "flex-start",
                                fontWeight: "bold",
                                fontSize: 15,
                                color: '#ffffff',
                                height: 25,
                                width: 180,
                                backgroundColor: "black",
                                marginTop:5,
                                justifyContent: "center",

                                
                                
                            }}>
                                    Let's get you connected
                </Text>
            </View>
                <View style={{ flex: .3, flexDirection:'row'}}>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity style={{
                                    height: 130,
                                    width: 180,
                                    borderRadius: 50,
                                    backgroundColor: "grey",
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 10,
                                    marginLeft: 10
                                    
                                
                                }}>
                            <Text style={{
                                            fontSize: 30,
                                            
                                            fontWeight: "bold",
                                            color: '#ffffff'}}>New Matches Today
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                                    height: 130,
                                    width: 180,
                                    borderRadius: 50,
                                    backgroundColor: "grey",
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 10,
                                    marginLeft: 10
                                    
                                
                                }}>
                            <Text style={{
                                            fontSize: 30,
                                            
                                            fontWeight: "bold",
                                            color: '#ffffff'}}>Get Go Followers
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                                    height: 130,
                                    width: 180,
                                    borderRadius: 50,
                                    backgroundColor: "grey",
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 10,
                                    marginLeft: 10
                                    
                                
                                }}>
                            <Text style={{
                                            fontSize: 30,
                                            
                                            fontWeight: "bold",
                                            color: '#ffffff'}}>Get Go Followers
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                                    height: 130,
                                    width: 180,
                                    borderRadius: 50,
                                    backgroundColor: "grey",
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 10,
                                    marginLeft: 10
                                    
                                
                                }}>
                            <Text style={{
                                            fontSize: 30,
                                            
                                            fontWeight: "bold",
                                            color: '#ffffff'}}>Get Go Followers
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                                    height: 130,
                                    width: 180,
                                    borderRadius: 50,
                                    backgroundColor: "grey",
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 10,
                                    marginLeft: 10
                                    
                                
                                }}>
                            <Text style={{
                                            fontSize: 30,
                                            
                                            fontWeight: "bold",
                                            color: '#ffffff'}}>Get Go Followers
                            </Text>

                        </TouchableOpacity>
                    </ScrollView>
                    </View>
                <View style = {{flex:.3, backgroundColor: 'yellow',}}>
                    
                        <Text style={{
                                    alignSelf: "flex-start",
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: '#ffffff',
                                    height: 25,
                                    width: 180,
                                    backgroundColor: "black",
                                    marginTop:5,
                                    justifyContent: "center",

                                    
                                    
                                }}>
                                        Recommended for You
                        </Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <ScrollView horizontal={true}>
                            <TouchableOpacity style={{
                                height: 130,
                                width: 180,
                                borderRadius: 50,
                                backgroundColor: "grey",
                                justifyContent:'center',
                                alignItems:'center',
                                marginTop: 10,
                                marginLeft: 10
                                
                            
                            }}>
                                <Text style={{
                                        fontSize: 30,
                                        
                                        fontWeight: "bold",
                                        color: '#ffffff'}}>Make Your Bio
                                </Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 130,
                                width: 180,
                                borderRadius: 50,
                                backgroundColor: "grey",
                                justifyContent:'center',
                                alignItems:'center',
                                marginTop: 10,
                                marginLeft: 10
                                
                            
                            }}>
                                <Text style={{
                                        fontSize: 30,
                                        
                                        fontWeight: "bold",
                                        color: '#ffffff'}}>Finish Profile 
                                </Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                    height: 130,
                                    width: 180,
                                    borderRadius: 50,
                                    backgroundColor: "grey",
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 10,
                                    marginLeft: 10
                                    
                                
                                }}>
                            <Text style={{
                                            fontSize: 30,
                                            
                                            fontWeight: "bold",
                                            color: '#ffffff'}}>Get Go Followers
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                                    height: 130,
                                    width: 180,
                                    borderRadius: 50,
                                    backgroundColor: "grey",
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 10,
                                    marginLeft: 10
                                    
                                
                                }}>
                            <Text style={{
                                            fontSize: 30,
                                            
                                            fontWeight: "bold",
                                            color: '#ffffff'}}>Get Go Followers
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                                    height: 130,
                                    width: 180,
                                    borderRadius: 50,
                                    backgroundColor: "grey",
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 10,
                                    marginLeft: 10
                                    
                                
                                }}>
                            <Text style={{
                                            fontSize: 30,
                                            
                                            fontWeight: "bold",
                                            color: '#ffffff'}}>Get Go Followers
                            </Text>

                        </TouchableOpacity>
                        </ScrollView>

                    </View>
                    
                </View>
                <View style = {{flex: .4, backgroundColor: 'red'}}>
                    <Text style={{
                            alignSelf: "flex-start",
                            fontWeight: "bold",
                            fontSize: 15,
                            color: '#ffffff',
                            height: 25,
                            width: 180,
                            backgroundColor: "black",
                            marginTop:5,
                            justifyContent: "center",

                            
                            
                        }}>
                                Tip of the day
                    </Text>
                
                    <View style = {{ flexDirection: 'row'}}>
                    <TouchableOpacity style={{
                        height: 130,
                        width: 370,
                        borderRadius: 40,
                        backgroundColor: "grey",
                        justifyContent:'top',
                        alignItems:'center',
                        marginTop: 15,
                        marginLeft: 10
                        
                    
                    }}>
                        <Text style={{
                                fontSize: 18,
                                height: 130,
                                width: 370,
                                marginLeft: 40,
                                fontWeight: "italic",
                                color: '#ffffff'}}>Tips descirption to businesses either motivational or factual 
                        </Text>

                    </TouchableOpacity>
                    </View>
                </View>

               
        </SafeAreaView>
     </SafeAreaView>

    )
}


export default BusinessHomeScreen;
/*
<TouchableOpacity style={{
                        height: 130,
                        width: 370,
                        borderRadius: 40,
                        backgroundColor: "grey",
                        justifyContent:'top',
                        alignItems:'center',
                        marginTop: 15,
                        marginLeft: 10
                        
                    
                    }}>
                        <Text style={{
                                fontSize: 18,
                                height: 130,
                                width: 370,
                                marginLeft: 40,
                                fontWeight: "italic",
                                color: '#ffffff'}}>Tips descirption to businesses either motivational or factual 
                        </Text>

                    </TouchableOpacity>

                    */