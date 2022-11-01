import React, {useState} from "react";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity, View, Image} from "react-native";




const BusinessProfilePic = () => {
    
    const [image, setImage] = useState(null);
    
    
   const PickProfilePic = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect : [2,2],
          quality: 1
        })
        console.log(result)
        if (!result.cancelled){
          setImage(result.uri)
        }
      }
    
    
    return(
        
        
            <TouchableOpacity 
      //Add Profile Button
                style={{
                height: '90%', 
                width: '45%',
                alignSelf:'center',
                borderRadius:'100%',
                justifyContent:'center',
                backgroundColor: "#F39C12"}}
                
                onPress={PickProfilePic}>

                  {image && <Image source ={{uri:image}} style={{
                    height : '99%',
                    width : '99%',
                    borderRadius:'100%',
                    alignSelf:'center',
                    

                  }} />}

              </TouchableOpacity> 
            
    )
}

export default BusinessProfilePic;