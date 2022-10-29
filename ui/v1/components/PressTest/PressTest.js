import React from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View, Pressable} from 'react-native'


const PressTest = () => {
    return(
        <View>
            <Pressable style={{
                height:100,
                width:100
            }} >
                
                <Text>Submit</Text>
            </Pressable>
        </View>
    );
};

export default PressTest;