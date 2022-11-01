import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const BackgroundColor = ({children}) => {
    return (
        <LinearGradient 
        style = {{
            flex:1,
            paddingTop: Platform.OS ==='android' ? StatusBar.currentHeight:0,
        }} 
        colors={[
            '#5E5E5E','#8E8E8E',
            ]}>

            {children}



        </LinearGradient>
    )
}

export default BackgroundColor;