import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import AddProfileButton from "../components/AddProfilePicButton";
import LinearGradientTO from "../components/LineargradientTO";
import CollectionButton from "../components/CollectionsButton";
import { NavigationContainer } from "@react-navigation/native";
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

const BusinessHomeScreenTest = () => {
    return(
        <LinearGradient // background gradient view
                style={styles.container}
                colors={['#FDFEFE','#626567']}>
                  
            
                
                <SafeAreaView style={styles.container2T}>
                    <View>
                        <Text style = {{ fontSize: 30, justifyContent: "bottom", marginTop: 5, fontWeight: 'bold', color: 'white'}}> 
                        Welcome Back 
                        </Text>
                        <AddProfileButton/>
                    </View>
                                <View
                    //Profile Info Style
                                style={(styles.profileinfoParent), {alignItems: 'center'}}>
                                <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={styles.profileinfograd}>
                                    <Text
                    //Text Inside of Profile info
                                    numberOfLines={1}
                                    style={{
                                    fontSize:18,
                                    fontWeight:"bold",
                                    color:'white',
                                    textAlign:'left',
                                    position:'absolute',
                                    justifyContent:'flex-start',
                                    marginTop:20,
                                    marginLeft:5,
                                    
                                    }}>Business Name</Text>

                                    <Text numberOfLines={2} 
                                    style={{
                                    fontSize:18,
                                    fontWeight:"bold",
                                    color:'white',
                                    position:'absolute',
                                    textAlign:'left',
                                    marginTop:50,
                                    marginLeft:5,
                                    
                                    }}>Company Address </Text>
                                    <Text numberOfLines={1} 
                                    style={{
                                    fontSize:18,
                                    fontWeight:"bold",
                                    color:'white',
                                    position:'absolute',
                                    textAlign:'center',
                                    marginTop:120,
                                    marginLeft:43,
                                    }}> Followers </Text>
                            </LinearGradient>
                            </View>
                   
                        <View style={{ flex: .27, flexDirection:'row'}}>
                            <ScrollView horizontal={true}>
                                <TouchableOpacity style={{
                                            height: 110,
                                            width: 160,
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
                                            height: 110,
                                            width: 160,
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
                                            height: 110,
                                            width: 160,
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
                                                    color: '#ffffff'}}>Plan Events
                                    </Text>
        
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                            height: 110,
                                            width: 160,
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
                                                    color: '#ffffff'}}>Join Groups
                                    </Text>
        
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                            height: 110,
                                            width: 160,
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
                                                    color: '#ffffff'}}>Connect With businesses
                                    </Text>
        
                                </TouchableOpacity>
                            </ScrollView>
                            </View>
                        <View style = {{flex:.33, backgroundColor: 'yellow',}}>
                            
                                <Text style={{
                                            alignSelf: "flex-start",
                                            fontWeight: "bold",
                                            fontSize: 15,
                                            color: '#ffffff',
                                            height: 25,
                                            width: 180,
                                            //backgroundColor: "black",
                                            marginTop:5,
                                            justifyContent: "center",
        
                                            
                                            
                                        }}>
                                                Recommended for You
                                </Text>
                            
                            <View style={{flexDirection:'row'}}>
                                <ScrollView horizontal={true}>
                                    <TouchableOpacity style={{
                                        height: 110,
                                        width: 160,
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
                                        height: 110,
                                        width: 160,
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
                                           height: 110,
                                           width: 160,
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
                                                    color: '#ffffff'}}>Analytics
                                    </Text>
        
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                            height: 110,
                                            width: 160,
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
                                            height: 110,
                                            width: 160,
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
                                                    color: '#ffffff'}}>Plan Events
                                    </Text>
        
                                </TouchableOpacity>
                                </ScrollView>
        
                            </View>
                            
                        </View>
                        <View style = {{flex: .37, backgroundColor: 'red'}}>
                            <Text style={{
                                    alignSelf: "flex-start",
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: '#ffffff',
                                    height: 25,
                                    width: 180,
                                    //backgroundColor: "black",
                                    marginTop:5,
                                    justifyContent: "center",
        
                                    
                                    
                                }}>
                                        Tip of the day
                            </Text>
                        
                            <View style = {{ flexDirection: 'row'}}>
                            <TouchableOpacity style={{
                                height: 110,
                                width: 370,
                                borderRadius: 40,
                                backgroundColor: "grey",
                                justifyContent:'top',
                                alignItems:'center',
                                marginTop: 3,
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
        </LinearGradient>
        
            );
        };

export default BusinessHomeScreenTest;