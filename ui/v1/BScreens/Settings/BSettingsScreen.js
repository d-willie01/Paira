import React, {useContext} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {StateContext} from "../../StateManagement/StateProvider";
 



const BSettingsScreen = () =>{

    const {LogoutBUser} = useContext(StateContext);

    
    const bUserLogout = () =>{
        LogoutBUser();
    }




    return(

            <View style ={{
                flex:1, 
                alignItems:"center",
                justifyContent:"center"
            }}>


            <TouchableOpacity onPress={bUserLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>


            </View>


    )


}
export default BSettingsScreen;