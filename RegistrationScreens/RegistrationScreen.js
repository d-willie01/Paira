import React, { useState } from "react";
import {Text, View, Button} from 'react-native'


const RegistrationScreen = () => {

    const SetBRegistration = () =>{
        return(
          setUState(true),
          console.log(Ustate)
        )
      }
      
      const SetURegistration = () =>{
        return(
          setUState(false),
          console.log(Ustate)
        )
      }
      
      const [Ustate, setUState] = useState(null);

  

    return(
        <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
        <Button title="Business" onPress={SetBRegistration}/>
        <Button title="User" onPress={SetURegistration}/>

      </View>
        
    );
};

export default RegistrationScreen;