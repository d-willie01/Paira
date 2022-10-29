import React, {useState, useEffect} from "react";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Styles/styles";
import TipsButton from "../components/TipsButton/TipsButton";
import NameTagButton from "../components/ProfileInfoButtons/NameTag/NameTagButton";
import SocialButton from "../components/ProfileInfoButtons/Social/SocialButton";
import SocialButton2 from "../components/ProfileInfoButtons/Social/SocialButton2";
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
import BusinessHeaderOutline from "../components/BusinessRefactor/BusinessHeaderOutline";
import BusinessAddKeyWordsScreen from "./BusinessAddKeywordScreen";


const BusinessHomeScreenTest = () => {
    const Startnavigation = useNavigation();
    
       const BusinessAddKeyWordsScreen = () => {
            Startnavigation.navigate("Organization Keywords")
       }
    const [image, setImage] = useState(null);
  


  useEffect(  () =>{
    if (Platform.OS != "web"){
      const { status }  = ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status != "granted"){
        console.log("Permission denied!");
      }
      
    }
  }, [])
  
  const PickProfilePic = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect : [2,2],
      quality: 1
    })
    console.log(result)
    if (!result.cancelled){
      setImage(result.uri)
    }
  }
    return(
       
    <LinearGradient // background gradient view
    style={styles.container}
    colors={['#B1B1B3','#CACACC']}> 
    <TouchableOpacity style={styles.businessProfileButton}
                                onPress={PickProfilePic}>

                            </TouchableOpacity>
        <SafeAreaView style={styles.container2T}>
            <Text style = {styles.businessHSHeaderText}> 
                        Welcome Back 
            </Text>
                        <View>
                        <LinearGradient 
                        style={styles.businessHeaderBackground}
                        colors={["#F39C12","#F39C12" ]}>
                        <LinearGradient 
                            style={styles.businessHeaderForground}
                            colors={['#F5B041','#F8C471' ]}>
                            <TouchableOpacity style={styles.businessProfileButton}
                                onPress={PickProfilePic}>

                            </TouchableOpacity>
                        <View style= {{ alignItems: 'flex-end'}}>
                            <LinearGradient
                                colors={['#F8C471','#FF8900']}
                                style={styles.buisnessInfoBackground}>
                            <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={styles.buisnessInfoForeground}>
                                    <Text
                    //Text Inside of Profile info
                                        numberOfLines={1}
                                        style={styles.businessNameText}>Business Name
                                    </Text>
                                    <Text 
                                        style={styles.companyAdressText}>Company Address
                                    </Text>
                                    <Text 
                                        style={styles.businessTextInfo}
                                        >Company City
                                    </Text>
                                    <Text 
                                        style={styles.subscribersText}> Subscribers
                                    </Text>
                                </LinearGradient>
                                </LinearGradient>
                            </View>
                            </LinearGradient>
                            </LinearGradient>
                            </View>
                                    <Text style= {styles.businessHSsubHeaderText}> Let's get you connected</Text>
                <View style={{ flex: .23, flexDirection:'row', }}>
                    
                    <ScrollView horizontal={true} >
                        <TouchableOpacity>
                            <LinearGradient
                                style={styles.linearbackgrounBbuttons}
                                colors={['#F8C471','#FF8900' ]}>
                                <LinearGradient
                                style={styles.linearforgroundButtons}
                                colors={['#F8C471','#F5B041' ]}>
                                    <Text style={styles.businessHSwidgetstext}> 5 New Matches 
                                    </Text>
                                </LinearGradient>
                            </LinearGradient>

                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <LinearGradient
                                style={styles.linearbackgrounBbuttons}
                                colors={['#F8C471','#FF8900']}>
                                <LinearGradient
                                style={styles.linearforgroundButtons}
                                colors={['#F8C471','#F5B041']}>
                                    <Text style={styles.businessHSwidgetstext}> 50 Total Matches
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
                            }}>Tips</Text>
                </View>
                    <View style={{flex:.5,flexDirection:'row'}}>
                        
                        <ScrollView horizontal={true}>
                            <TouchableOpacity 
                            style={styles.addkeywordsTouchable}
                             onPress={BusinessAddKeyWordsScreen}>
                            <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={styles.addkeywordsTouchableForground}>
                                <Text style={styles.addKeywordsTextB}>Add Keywords</Text>
                            </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style ={styles.BusinessTipsBackground}>
                            <LinearGradient
                                colors={['#F8C471','#F5B041']}
                                style={styles.BusinessTipsForground}>
                                    <Text style={styles.tipsTextB}>Tips descirption to businesses either motivational or factual</Text>
                            </LinearGradient>
                            </TouchableOpacity>
                        </ScrollView>

                    </View>
               
        </SafeAreaView>
    </LinearGradient>
    );
};

export default BusinessHomeScreenTest;

