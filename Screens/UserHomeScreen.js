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
        <Button title="AddKeyWordsScreen" onPress={AddKeyWordsScreen} />
        <SafeAreaView style={styles.container2D}>
           <View style= {{
            backgroundColor:'purple',
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center'

           }}>

                <TouchableOpacity style={{
                    height: 25,
                    width: 25,
                    backgroundColor: 'black'
                }}>

                </TouchableOpacity>

           </View>
           <View style= {{
            backgroundColor:'red',
            height: 25,
            width: 25

           }}>


           </View>
            <View style= {{
            backgroundColor:'green',
            height: 25,
            width: 25

           }}>
            

           </View>
            
        </SafeAreaView>
        <View style={{  height: 50,
                        borderRadius: 25,
                        width: 150, 
                        
                        alignSelf:'center', 
                        marginTop: 25, 
                        alignItems: 'center', 
                        justifyContent:'center'}}>
                <Text style={{
                     fontSize: 25,
                     fontStyle: 'italic',
                     fontWeight: "bold",
                     color: '#ffffff'
                }}>Collections</Text>
        </View>
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