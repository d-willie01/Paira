import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const BackgroundColor = ({children}) => {
    return (
        <LinearGradient 
        style = {{
            flex:1,
            backgroundColor:'#D5D5D5',
            paddingTop: Platform.OS ==='android' ? StatusBar.currentHeight:0,
        }} 
        colors={[
            '#B1B1B3','#CACACC',
            ]}>

            {children}



        </LinearGradient>
    )
}

export default BackgroundColor;