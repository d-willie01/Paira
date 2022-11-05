import React from "react";
import { Text, View, Linking, TouchableOpacity, SafeAreaView } from "react-native";
import BackgroundColor from "../../components/Theme/BackgroundColor";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";



const FlagScreen = () =>{



return (

<BackgroundColor>
    <SafeAreaView style ={{
            height: heightPercentageToDP('100%'),
            width: widthPercentageToDP('100%'),
            alignItems:"center",
            justifyContent:"center"
    }}>



    <View style={{
                height:'10%',
                width:'30%',
                backgroundColor:'#898989',
                justifyContent:'center',
                marginLeft:'2%',
                marginTop:'2%',
                borderRadius:100,}}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.paira.info/")}>
            <LinearGradient
                    colors={['#898989','#ADADAD']}
                    style={{
                    height:'100%',
                    width:'100%',
                    borderRadius:'40%',
                    bottom:'5%',
                    justifyContent:'center',
                    alignItems:"center"
                    
                    }}>
                        <Text>
                            Report Card & Contact Us!
                            
                        </Text>
            </LinearGradient>
            </TouchableOpacity>
        </View>




    </SafeAreaView>

</BackgroundColor>
    
    
    





)






}
export default FlagScreen;