import React from "react";
import {Text, SafeAreaView, Button, TouchableOpacity, View} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import { ScrollView } from "react-native";
import MatchCategoryFiveScreen from "./MatchCategoryFiveScreen";
import CategoryFiveScreen from "./CategoryFiveScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import BackgroundColor from "../components/Theme/BackgroundColor";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";






const UserMatchScreen = () => {

    const UMatchnavigation = useNavigation();
        
    const CategoryOneScreen = () =>{
           
            UMatchnavigation.navigate("CategoryOneWords")
    }
    
    const CategoryTwoScreen = () =>{
           
        UMatchnavigation.navigate("CategoryTwoWords")
    }
    
    const CategoryThreeScreen = () =>{
           
        UMatchnavigation.navigate("CategoryThreeWords")
    }
    
    const CategoryFourScreen = () =>{
           
        UMatchnavigation.navigate("CategoryFourWords")
    }
    
    const CategoryFiveScreen = () =>{
           
        UMatchnavigation.navigate("CategoryFiveWords")
    }
   
   
   
   
   
    return(

<BackgroundColor>
       
        <SafeAreaView style={{
    height: heightPercentageToDP('88%'),
    width: widthPercentageToDP('100%') }}>


    <View 
           style ={{
                 height: '20%',
                 width: '100%',
                 backgroundColor:'transparent',
                 marginTop:'3%',
                 
            }}>
            <Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:'15%',
                fontWeight:'900',
                color:'white',
                marginTop:'10%',
                marginLeft:'60%',
                width:'10%',

                }}>
                Exploring local starts here.</Text>

<TouchableOpacity style={{
                height:'100%',
                width:'43%',
                borderRadius:'100%',
                backgroundColor:'#F39C12',
                justifyContent:'center',
                marginLeft:'10%',
                }}
                
                onPress={CategoryOneScreen}>
                
                <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{
                                    height:'100%',
                                    width:'100%',
                                    borderRadius:'100%',
                                    justifyContent:'center',
                                    bottom:5,
                                    }}>

                                <MaterialCommunityIcons name="food-fork-drink" size={'45%'} color="white" style={{
                                    alignSelf:'center'
                                }} />
                                    
                                        <Text numberOfLines={2} style={{
                                        fontSize:10,
                                        fontWeight:'900',
                                        color:'white',
                                        textAlign:'center',
                                        alignSelf:'center',
                                        fontStyle:'italic',
                                        }}> Food </Text>
                </LinearGradient>

            </TouchableOpacity>
    </View>

    <View 
           style ={{
                 height: '20%',
                 width: '100%',
                 backgroundColor:'transparent',
                 marginTop:'0%',
                 
            }}>
                <Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:'15%',
                fontWeight:'900',
                color:'white',
                marginTop:'15%',
                marginLeft:'12%',
                width:'15%',

                }}>
                Get out there.</Text>

<TouchableOpacity style={{
                height:'100%',
                width:'43%',
                borderRadius:'100%',
                backgroundColor:'#F39C12',
                justifyContent:'center',
                marginLeft:'45%',
                }}
                
                onPress={CategoryTwoScreen}>
                
                <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{
                                    height:'100%',
                                    width:'100%',
                                    borderRadius:'100%',
                                    justifyContent:'center',
                                    bottom:5,
                                    }}>

                                <MaterialCommunityIcons name="party-popper" size={'45%'} color="white" style={{
                                    alignSelf:'center'
                                }} />
                                    
                                        <Text numberOfLines={2} style={{
                                        fontSize:10,
                                        fontWeight:'900',
                                        color:'white',
                                        textAlign:'center',
                                        alignSelf:'center',
                                        fontStyle:'italic',
                                        }}> Entertainment </Text>
                </LinearGradient>

            </TouchableOpacity>
    </View>

    <View 
           style ={{
                 height: '20%',
                 width: '100%',
                 backgroundColor:'transparent',
                 marginTop:'0%',
                 
            }}>
                 <Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:'15%',
                fontWeight:'900',
                color:'white',
                marginTop:'15%',
                marginLeft:'60%',
                width:'15%',

                }}>
                Local drip.</Text>

<TouchableOpacity style={{
                height:'100%',
                width:'43%',
                borderRadius:'100%',
                backgroundColor:'#F39C12',
                justifyContent:'center',
                marginLeft:'10%',
                }}
                
                onPress={CategoryThreeScreen}>
                
                <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{
                                    height:'100%',
                                    width:'100%',
                                    borderRadius:'100%',
                                    justifyContent:'center',
                                    bottom:5,
                                    }}>

                                <MaterialCommunityIcons name="store" size={'45%'} color="white" style={{
                                    alignSelf:'center'
                                }} />
                                    
                                        <Text numberOfLines={2} style={{
                                        fontSize:10,
                                        fontWeight:'900',
                                        color:'white',
                                        textAlign:'center',
                                        alignSelf:'center',
                                        fontStyle:'italic',
                                        }}> Retail </Text>
                </LinearGradient>

            </TouchableOpacity>
    </View>
    
    <View 
           style ={{
                 height: '20%',
                 width: '100%',
                 backgroundColor:'transparent',
                 marginTop:'0%',
                 
            }}>
<Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:'15%',
                fontWeight:'900',
                color:'white',
                marginTop:'15%',
                marginLeft:'12%',
                width:'15%',

                }}>
                Build your community!</Text>

<TouchableOpacity style={{
                height:'100%',
                width:'43%',
                borderRadius:'100%',
                backgroundColor:'#F39C12',
                justifyContent:'center',
                marginLeft:'45%',
                }}
                
                onPress={CategoryFourScreen}>
                
                <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{
                                    height:'100%',
                                    width:'100%',
                                    borderRadius:'100%',
                                    justifyContent:'center',
                                    bottom:5,
                                    }}>

                                <MaterialIcons name="volunteer-activism" size={'45%'} color="white" style={{
                                    alignSelf:'center'
                                }} />
                                    
                                        <Text numberOfLines={2} style={{
                                        fontSize:10,
                                        fontWeight:'900',
                                        color:'white',
                                        textAlign:'center',
                                        alignSelf:'center',
                                        fontStyle:'italic',
                                        }}> Non-Profit </Text>
                </LinearGradient>

            </TouchableOpacity>
    </View>
           
    <View 
           style ={{
                 height: '20%',
                 width: '100%',
                 backgroundColor:'transparent',
                 marginTop:'0%',
                 
            }}>
                <Text numberOfLines={2} style={{
                position:'absolute',
                fontSize:'15%',
                fontWeight:'900',
                color:'white',
                marginTop:'15%',
                marginLeft:'60%',
                width:'15%',

                }}>
                Get active.</Text>

<TouchableOpacity style={{
                height:'100%',
                width:'43%',
                borderRadius:'100%',
                backgroundColor:'#F39C12',
                justifyContent:'center',
                marginLeft:'10%'
                }}
                
                onPress={CategoryFiveScreen}>
                
                <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={{
                                    height:'100%',
                                    width:'100%',
                                    borderRadius:'100%',
                                    justifyContent:'center',
                                    bottom:5,
                                    }}>

                                <MaterialCommunityIcons name="yoga" size={'45%'} color="white" style={{
                                    alignSelf:'center'
                                }} />
                                    
                                        <Text numberOfLines={2} style={{
                                        fontSize:10,
                                        fontWeight:'900',
                                        color:'white',
                                        textAlign:'center',
                                        alignSelf:'center',
                                        fontStyle:'italic',
                                        }}> Sports & Fitness </Text>
                </LinearGradient>

            </TouchableOpacity>
    </View>
        
        
      


               
                
                
                
               
                </SafeAreaView>
        </BackgroundColor>
    );
};

export default UserMatchScreen;