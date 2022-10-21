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
import { MaterialCommunityIcons } from '@expo/vector-icons';


const BusinessHomeScreenTest = () => {
    return(
       
    <LinearGradient // background gradient view
    style={styles.container}
    colors={['#B1B1B3','#CACACC']}> 
        <SafeAreaView style={styles.container2T}>
            <Text style = {{ fontSize: 25, fontWeight: '900', justifyContent: 'flex-start', marginTop: 5, marginLeft:200, color: 'white'}}> 
                        Welcome Back 
            </Text>
        <LinearGradient 
            style={{
                height: 240,
                width: 400,
                borderRadius: 25,
                alignItems:'center',
                marginTop: 3,
                marginLeft: 10
                }}
                colors={["#F39C12","#F39C12" ]}>
            
                <LinearGradient 
                style={{
                    height: 235,
                    width: 395,
                    borderRadius: 25,
                    
                    marginTop: 3,
                    }}
                    colors={['#F5B041','#F8C471' ]}>
                        
                        <View>
                        <TouchableOpacity 
                            style={{
                            marginLeft:20,
                            marginTop: 30, 
                            borderRadius:80,
                            width:160,
                            height:160,
            
                            position:"absolute",
                            backgroundColor: "#F39C12"}}> 
  
                         </TouchableOpacity>
                        </View>
                        <View style= {{ alignItems: 'flex-end'}}>
                            <LinearGradient
                                colors={['#F8C471','#FF8900']}
                                style={{ 
                                    height:175,
                                    width:190,
                                    borderRadius:50,
                                    marginTop: 30,
                                    marginRight: 10,
                                    alignItems: 'center',}}>
                            <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{height:170,
                                    width:185,
                                    borderRadius:50,
                                    alignItems:'center'}}>
                                    <Text
                    //Text Inside of Profile info
                                        numberOfLines={1}
                                        style={{
                                        fontSize:18,
                                        fontWeight:'bold',
                                        color:'white',
                                        textAlign:'left',
                                        position:'absolute',
                                        justifyContent:'flex-start',
                                        marginTop:20,
                                        marginLeft:5,
                                    
                                        }}>Business Name
                                    </Text>

                                    <Text 
                        
                                        style={{
                                        fontSize:18,
                                        fontWeight:'bold',
                                        color:'white',
                                        position:'absolute',
                                        textAlign:'left',
                                        marginTop:50,
                                        marginLeft:5,
                                        
                                        }}>Company Address
                                    </Text>
                                    <Text 
                                         
                                        style={{
                                        fontSize:18,
                                        fontWeight:'bold',
                                        color:'white',
                                        position:'absolute',
                                        textAlign:'left',
                                        marginTop:75,
                                        marginLeft:5,
                                        
                                        }}>Company City
                                    </Text>
                                    <Text 
                                        numberOfLines={1} 
                                        style={{
                                        fontSize:18,
                                        fontWeight:"bold",
                                        color:'white',
                                        position:'absolute',
                                        textAlign:'center',
                                        marginTop:120,
                                        marginLeft:35,
                                        }}> Subscribers
                                    </Text>
                                </LinearGradient>
                                </LinearGradient>
                            </View>
                        
                </LinearGradient>
                </LinearGradient>
            <Text style= {{color: 'white', fontWeight: '900', marginTop: 15, marginLeft: 10, fontSize: 20}}> Let's get you connected</Text>

                
            
                <View style={{ flex: .23, flexDirection:'row', }}>
                    
                    <ScrollView horizontal={true} >
                        <TouchableOpacity>
                            <LinearGradient
                                style={{
                                    height: 80,
                                    width: 200,
                                    borderRadius: 50,
                                    alignItems:'center',
                                    marginTop: 13,
                                    marginLeft: 10
                                    
                                
                                }}
                                colors={['#F8C471','#FF8900' ]}>
                            
                                <LinearGradient
                                style={{
                                    height: 75,
                                    width: 195,
                                    borderRadius: 50,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    
                                
                                }}
                                colors={['#F8C471','#F5B041' ]}>
                                    <Text style={{
                                                    fontSize: 25,
                                                    
                                                    fontWeight: "900",
                                                    color: '#ffffff'}}> 5 New Matches 
                                    </Text>
                                </LinearGradient>
                            </LinearGradient>

                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <LinearGradient
                                style={{
                                    height: 80,
                                    width: 200,
                                    borderRadius: 50,
                                    marginTop: 13,
                                    marginLeft: 10
                                    
                                
                                }}
                                colors={['#F8C471','#FF8900']}>

                                <LinearGradient
                                style={{
                                    height: 75,
                                    width: 195,
                                    borderRadius: 50,
                                    backgroundColor: "grey",
                                    justifyContent:'center',
                                    alignItems:'center',
                                    
                                
                                }}
                                colors={['#F8C471','#F5B041']}>
                                    <Text style={{
                                                    fontSize: 25,
                                                    
                                                    fontWeight: "900",
                                                    color: '#ffffff'}}> 50 Total Matches
                                    </Text>
                                </LinearGradient>
                            </LinearGradient>


                        </TouchableOpacity>
                        
                    </ScrollView>
                </View>
                <View>
                
                        <Text style = {{marginLeft: 260, 
                            fontWeight: "900",
                            fontSize: 20,
                            color: '#ffffff',                            
                            justifyContent: "center",}}>Tips</Text>
                </View>
                    <View style={{flex:.5,flexDirection:'row'}}>
                        
                        <ScrollView horizontal={true}>
                            <TouchableOpacity style ={{
                             height:145,
                             width:250,
                             borderRadius:60,
                             marginRight: 10,
                             alignItems: 'center',
                             backgroundColor:'#F39C12',}}>
                            <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{
                                    height:140,
                                    width:245,
                                    justifyContent:'center',
                                    borderRadius:60,}}>
                                <Text numberOfLines={3} style={{
                                fontSize:25,
                                fontWeight:'900',
                                color:'white',
                                textAlign:'center',
                                alignSelf:'center',
                                fontStyle:'italic'
                                }}>Add Keywords</Text>
                            </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style ={{
                             height:170,
                             width:155,
                             borderRadius:20,
                             marginRight: 10,
                             alignItems: 'center',
                             backgroundColor:'#F39C12',}}>
                            <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{
                                height:165,
                                width:150,
                                borderRadius:20,
                                justifyContent:'center',
                                }}>
                                    <Text style={{
                                fontSize:16,
                                fontWeight:'800',
                                color:'white',
                                fontStyle:'italic'}}>Tips descirption to businesses either motivational or factual</Text>
                            </LinearGradient>
                            </TouchableOpacity>
                        </ScrollView>

                    </View>
               
        </SafeAreaView>
    </LinearGradient>
    );
};

export default BusinessHomeScreenTest;
