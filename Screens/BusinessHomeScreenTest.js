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
        <LinearGradient 
            style={{
                height: 208,
                width: 370,
                borderRadius: 25,
                justifyContent:'top',
                marginTop: 3,
                marginLeft: 10
                }}
                colors={["#E4E4E4","#FF8900" ]}>
            
                <LinearGradient 
                style={{
                    height: 200,
                    width: 370,
                    borderRadius: 25,
                    justifyContent:'top',
                    marginTop: 3,
                    }}
                    colors={['#F5B041','#F8C471' ]}>
                
                        <Text style = {{ fontSize: 25, fontWeight: '900', justifyContent: 'flex-start', marginTop: 5, marginLeft: 10, color: 'white'}}> 
                        Welcome Back 
            
                        </Text>
                        <AddProfileButton/>
                
                        <TouchableOpacity 
                            style= {{ alignItems: 'flex-end'}}>
                        
                            <View
                        //Profile Info Style
                        style={(styles.profileinfoParentT), { marginRight: 20}}>
                            <LinearGradient
                                colors={['#F8C471','#FF8900']}
                                style={{ bottom:2, 
                                    height:155,
                                    width:170,
                                    borderRadius:15,}}>
                            <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={styles.profileinfograd}>
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
                                        numberOfLines={2} 
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
                        </TouchableOpacity>
                </LinearGradient>
                </LinearGradient>
            <Text style= {{color: 'white', fontWeight: '900', marginTop: 15, fontSize: 20}}> Let's get you connected</Text>

                
            
                <View style={{ flex: .28, flexDirection:'row'}}>
                    
                    <ScrollView horizontal={true}>
                        <TouchableOpacity>
                            <LinearGradient
                                style={{
                                    height: 120,
                                    width: 162,
                                    borderRadius: 50,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 13,
                                    marginLeft: 10
                                    
                                
                                }}
                                colors={['#F8C471','#FF8900' ]}>
                            
                                <LinearGradient
                                style={{
                                    height: 110,
                                    width: 160,
                                    borderRadius: 50,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    
                                
                                }}
                                colors={['#F8C471','#F5B041' ]}>
                                    <Text style={{
                                                    fontSize: 25,
                                                    
                                                    fontWeight: "900",
                                                    color: '#ffffff'}}>New Matches 
                                    </Text>
                                </LinearGradient>
                            </LinearGradient>

                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <LinearGradient
                                style={{
                                    height: 120,
                                    width: 162,
                                    borderRadius: 50,
                                    justifyContent:'center',
                                    marginTop: 13,
                                    marginLeft: 10
                                    
                                
                                }}
                                colors={['#F8C471','#FF8900']}>

                                <LinearGradient
                                style={{
                                    height: 110,
                                    width: 160,
                                    borderRadius: 50,
                                    backgroundColor: "grey",
                                    justifyContent:'center',
                                    alignItems:'center',
                                    
                                
                                }}
                                colors={['#F8C471','#F5B041']}>
                                    <Text style={{
                                                    fontSize: 25,
                                                    
                                                    fontWeight: "900",
                                                    color: '#ffffff'}}>Total Matches
                                    </Text>
                                </LinearGradient>
                            </LinearGradient>


                        </TouchableOpacity>
                        
                    </ScrollView>
                </View>
                <View style = {{flex:.28, }}>
                    
                        <Text style={{
                                    alignSelf: "flex-start",
                                    fontWeight: "900",
                                    fontSize: 20,
                                    color: '#ffffff',
                                    marginLeft: 5,
                                    height: 25,
                                    width: 250,
                                    //backgroundColor: "black",
                                    marginTop:5,
                                    justifyContent: "center",

                                    
                                    
                                }}>
                                        Recommended for You
                        </Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <ScrollView horizontal={true}>
                            <TouchableOpacity>
                                <LinearGradient
                                    style={{
                                        height: 120,
                                        width: 162,
                                        borderRadius: 50,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        marginTop: 13,
                                        marginLeft: 10
                                        
                                    
                                    }}
                                    colors={['#F8C471','#FF8900' ]}>
                                
                                        <LinearGradient
                                        style={{
                                            height: 110,
                                            width: 160,
                                            borderRadius: 50,
                                            justifyContent:'center',
                                            alignItems:'center',
                                            
                                        
                                        }}
                                        colors={['#F8C471','#F5B041' ]}>
                                            <Text style={{
                                                    fontSize: 25,
                                                    
                                                    fontWeight: "900",
                                                    color: '#ffffff'}}>Make Your Bio
                                            </Text>
                                        </LinearGradient>
                                </LinearGradient>

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient
                                style={{
                                    height: 120,
                                    width: 162,
                                    borderRadius: 50,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 13,
                                    marginLeft: 10
                                    
                                
                                }}
                                colors={['#F8C471','#FF8900' ]}>
                                
                                    <LinearGradient
                                    style={{
                                        height: 110,
                                        width: 160,
                                        borderRadius: 50,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        
                                    
                                    }}
                                    colors={['#F8C471','#F5B041' ]}>
                                        <Text style={{
                                                fontSize: 25,
                                                
                                                fontWeight: "900",
                                                color: '#ffffff'}}>Join Groups
                                        </Text>
                                    </LinearGradient>
                                </LinearGradient>

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient
                                style={{
                                    height: 120,
                                    width: 162,
                                    borderRadius: 50,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 13,
                                    marginLeft: 10
                                    
                                
                                }}
                                colors={['#F8C471','#FF8900' ]}>
                                
                                    <LinearGradient
                                    style={{
                                        height: 110,
                                        width: 160,
                                        borderRadius: 50,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        
                                    
                                    }}
                                    colors={['#F8C471','#F5B041' ]}>
                                        <Text style={{
                                                fontSize: 25,
                                                
                                                fontWeight: "900",
                                                color: '#ffffff'}}>Get connected
                                        </Text>
                                    </LinearGradient>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient
                                style={{
                                    height: 120,
                                    width: 162,
                                    borderRadius: 50,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 13,
                                    marginLeft: 10
                                    
                                
                                }}
                                colors={['#F8C471','#FF8900' ]}>
                                
                                    <LinearGradient
                                    style={{
                                        height: 110,
                                        width: 160,
                                        borderRadius: 50,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        
                                    
                                    }}
                                    colors={['#F8C471','#F5B041' ]}>
                                        <Text style={{
                                                fontSize: 25,
                                                
                                                fontWeight: "900",
                                                color: '#ffffff'}}>Finish Profile 
                                        </Text>
                                    </LinearGradient>
                                </LinearGradient>

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient
                                    style={{
                                        height: 120,
                                        width: 162,
                                        borderRadius: 50,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        marginTop: 13,
                                        marginLeft: 10
                                        
                                    
                                    }}
                                    colors={['#F8C471','#FF8900' ]}>
                                    
                                        <LinearGradient
                                        style={{
                                            height: 110,
                                            width: 160,
                                            borderRadius: 50,
                                            justifyContent:'center',
                                            alignItems:'center',
                                            
                                        
                                        }}
                                        colors={['#F8C471','#F5B041' ]}>
                                            <Text style={{
                                                    fontSize: 25,
                                                    
                                                    fontWeight: "900",
                                                    color: '#ffffff'}}>Plan Events 
                                            </Text>
                                        </LinearGradient>
                                </LinearGradient>
                            </TouchableOpacity>
                        </ScrollView>

                    </View>
                    
                </View>
                <View style = {{flex: .3, }}>
                    <Text style={{
                            alignSelf: "flex-start",
                            fontWeight: "900",
                            fontSize: 20,
                            color: '#ffffff',
                            height: 25,
                            width: 180,
                            //backgroundColor: "black",
                            marginTop: 30,
                            marginLeft: 10,
                            justifyContent: "center",

                            
                            
                        }}>
                                Tip of the day
                    </Text>
                
                    <TouchableOpacity style={{
                        height: 110,
                        width: 370,
                        borderRadius: 40,
                        backgroundColor: "red",
                        justifyContent:'top',
                        alignItems:'center',
                        marginTop: 3,
                        marginLeft: 10,
                        
                        
                    
                    }}>
                        <Text style={{
                                fontSize: 18,
                                height: 130,
                                width: 370,
                                marginTop: 10,
                                marginLeft: 40,
                                fontWeight: "italic",
                                color: '#ffffff'}}>Tips descirption to businesses either motivational or factual 
                        </Text>

                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    </LinearGradient>
    );
};

export default BusinessHomeScreenTest;


//Extra widget buttone from preivous scroll view
/*
<TouchableOpacity style={{
                                    height: 110,
                                    width: 160,
                                    borderRadius: 50,
                                    backgroundColor: "grey",
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop: 13,
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
                                    marginTop: 13,
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
                                    marginTop: 13,
                                    marginLeft: 10
                                    
                                
                                }}>
                            <Text style={{
                                            fontSize: 30,
                                            
                                            fontWeight: "bold",
                                            color: '#ffffff'}}>Connect With businesses
                            </Text>

                        </TouchableOpacity>
*/