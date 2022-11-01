import React from "react";
import { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({children}) => {
    
    
const [UState, setUState] = useState(null);
const [userToken, setUserToken] = useState(null);

    const BusinessState = () =>{
        
        setUState(true);
        console.log(UState);
    
    }

    const UserState = () => {
        
        setUState(false);
        console.log(UState);

    
    }

    
    
    return (
        <StateContext.Provider value ={{BusinessState, UserState, UState, userToken, setUserToken}} >
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;