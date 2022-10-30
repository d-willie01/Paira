import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";

const BackgroundColor = ({children}) => {
    return (
        <LinearGradient 
        style = {{
            height: heightPercentageToDP('100%'),
            width:widthPercentageToDP('100%'),
           // paddingTop: Platform.OS ==='android' ? StatusBar.currentHeight:0,
        }} 
        colors={[
            '#5E5E5E','#8E8E8E',
            ]}>

            {children}



        </LinearGradient>
    )
}

export default BackgroundColor;