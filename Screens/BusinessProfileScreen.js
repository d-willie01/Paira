import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform, Image, TextInput, ScrollView } from 'react-native';
import styles from "../Styles/styles";
import { FontAwesome } from '@expo/vector-icons'; 
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons'; 



const BusinessProfileScreen = () => {
    return(

   <LinearGradient // background gradient view
        style={styles.container}
        colors={['#B1B1B3','#CACACC',]}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", color: 'red' }}>
                <Text style = {{alignItems: "center", fontWeight: '900', fontSize: 28, color: 'white', marginTop: 80, marginBottom: 30}}> Edit Your Card</Text>
            <View>
                <TouchableOpacity>
                    <LinearGradient
                        style={{
                            
                            height:160,
                            alignItems: 'center',
                            width:300,
                            borderRadius:50,
                                                        
                        
                        }}
                        colors={['#F39C12','#F39C12' ]}>
                    
                        <LinearGradient
                        style={{
                            height: 155,
                            width: 295,
                            borderRadius: 50,
                            justifyContent:'center',
                            alignItems:'center',
                            
                        
                        }}
                        colors={['#F8C471','#F5B041' ]}>
                            <View>
                                <TouchableOpacity  stlye= {{width: 170, height: 150, backgroundColor: 'red'}}>
                                    <FontAwesome name="building" size={120} color="white" alignItems ='center'style = {{marginTop: 30}} />
                                </TouchableOpacity>
                            </View>
                            <View style = {{marginLeft:220, marginBottom: 26}}>
                                <TouchableOpacity>
                                    <AntDesign name="pluscircle" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
                <TouchableOpacity >
                            <LinearGradient
                                style={{
                                    height: 45,
                                    width: 310,
                                    borderRadius: 50,
                                    alignItems:'center',
                                    marginTop: 30,
                                    marginLeft: 10,
                                    marginBottom: 10
                                    
                                
                                }}
                                colors={['#F8C471','#FF8900' ]}>
                            
                                    <LinearGradient
                                    style={{
                                        height: 40,
                                        width: 300,
                                        borderRadius: 50,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        
                                    
                                    }}
                                    colors={['#F8C471','#F5B041' ]}>
                                        <Text style={{
                                                        fontSize: 25,
                                                        
                                                        fontWeight: "900",
                                                        color: '#ffffff'}}>Add Your Key Words
                                        </Text>
                                    </LinearGradient>
                            </LinearGradient>

                </TouchableOpacity>
                <ScrollView style={{
                            backgroundColor:'transparent',
                            flexDirection:'column',
                            height:500,
                            marginTop:10,
                            }}> 
                        <Text style = {{ color: 'white', fontSize: 25,fontWeight: '900'}}>Org. Name</Text>
                    <TextInput 
                    style = {styles.textInputT} 
                    placeholder = "e.g. Jerry's Tacos"/>

                        <Text style = {{ color: 'white', fontSize: 25, fontWeight: '900'}}> Slogan</Text>
                    <TextInput 
                        style = {styles.textInputT} 
                        placeholder = 'e.g. No debate, we will set you straight'/>

                        <Text style = {{ color: 'white', fontSize: 25, fontWeight: '900'}}>Website</Text>
                    <TextInput 
                    style = {styles.textInputT} 
                    placeholder = 'e.g. http//www.paira.com'/>

                        <Text style = {{ color: 'white', fontSize: 25, fontWeight: '900'}}> Phone Number</Text>
                    <TextInput 
                        style = {styles.textInputT} 
                        placeholder = 'e.g. 4506676677'/>
                        <Text style = {{ color: 'white', fontSize: 25, fontWeight: '900'}}>Bio</Text>
                    <TextInput 
                    style = {styles.textInputLargeT} 
                    placeholder = 'e.g. Brayben is extremely gay'/>

                </ScrollView>
        </View>
    </LinearGradient> 

    );
};

export default BusinessProfileScreen;

/*

 stlye= {{width: 170, height: 150, backgroundColor: 'red'}}>
                    <FontAwesome name="building" size={120} color="black" alignItems ='center' />
*/