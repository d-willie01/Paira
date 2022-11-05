import React, {useContext} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {StateContext} from "../../StateManagement/StateProvider";
 



const SettingsScreen = () =>{

    const {LogoutUser} = useContext(StateContext);

    
    const userLogout = () =>{
        LogoutUser();
    }




    return(

            <View style ={{
                flex:1, 
                alignItems:"center",
                justifyContent:"center"
            }}>


            <TouchableOpacity onPress={userLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>


            </View>


    )


}
export default SettingsScreen;