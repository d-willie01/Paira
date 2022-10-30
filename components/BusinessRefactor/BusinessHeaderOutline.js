import React, { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../TipsButton/TipsButtonStyles";

 const BusinessHeaderOutline = () =>{
        return(
    
<View>
    <LinearGradient 
            style={styles.businessHeaderBackground}
                colors={["#F39C12","#F39C12" ]}>
            
                <LinearGradient 
                style={styles.businessHeaderForground}
                    colors={['#F5B041','#F8C471' ]}>
                </LinearGradient>
     </LinearGradient>
     </View>
)};
export default BusinessHeaderOutline;