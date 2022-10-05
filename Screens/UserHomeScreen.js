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


const UserHomeScreen = () => { 
    
    const Unavigation = useNavigation();

    const AddKeyWordsScreen = () =>{
       
        Unavigation.navigate("AddKeyWordsScreen")

   
}
    return(
    
    <SafeAreaView style={styles.containerD}>
        <Button title="AddKeyWordsScreen" onPress={AddKeyWordsScreen} />
        <SafeAreaView style={styles.container2D}>
            <ChallengesButton style={styles.customAlign}/>
            <ScreenChangeButton/>
            <ChallengesButton/>
            <NotificationsButton/>
        </SafeAreaView>
        <SafeAreaView style={styles.container4D}>
            <Text style={styles.textD}>My Collections</Text>
            <PlusButton/>
        </SafeAreaView>
        <ScrollView horizontal= {true}  style={styles.container3D}>
            <View style={styles.viewTest}>
                <CollectionButton text="Favorites"/>
                <CollectionButton text="Popular"/>
                <CollectionButton text="recents"/>
                <CollectionButton text="You"/>
            </View>
        </ScrollView>
    </SafeAreaView>



    )
}


export default UserHomeScreen;