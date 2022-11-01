import React, {useState} from "react";
import { Pressable, View, Text, TouchableOpacity, Button } from "react-native";
import styles from "./PressButtonStyles";


const PressButton = () => {
    
    
    const [offButton, setIsDisabled] = useState(false);

    const clickOn = () =>{
        setIsDisabled(false);
        console.log("off");
    }



    /*const touchProps = {
        activeOpacity: 1,
        underlayColor: '#ffffff',
        style: isPress ? styles.btnPress : styles.btnNormal,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('HELLO'),
    }*/

    

    
    
    return(
        <View>
            <Button title ="submitt" disabled={true} onPress={clickOn}/>
        </View>
    );
};

export default PressButton;
