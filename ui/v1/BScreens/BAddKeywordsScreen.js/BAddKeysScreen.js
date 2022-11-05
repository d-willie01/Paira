import React, {useState, useEffect} from "react";

import { Text, View, ScrollView, Button  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import KeyWordButton from "../../components/KeyWordButton/KeyWordButton";
import MatchNowButton from "../../components/MatchNowButton/MatchNowButton";
import BackgroundColor from "../../components/Theme/BackgroundColor";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



const BAddKeysScreen = () =>{

    const UMatchnavigation = useNavigation();
    
    const [companyID, setCompanyID] = useState();
    const [userInfo, setUserInfo] = useState();

    const [cardKeys, setCardKeys] = useState([]);


    const SetValue1 = (keywords) => {

        
        setCardKeys([...cardKeys, keywords]);
        console.log(cardKeys);



    };


    const SetValue2 = (keywords) => {

        
        setCardKeys([...cardKeys, keywords]);
        


    };



    const SetValue3 = (keywords) => {


        
        setCardKeys([...cardKeys, keywords]);
        

    };


    const SetValue4 = (keywords) => {


    setCardKeys([...cardKeys, keywords]);
    
    


    };



    const ConsoleTest = () => {
        
    }



  


    
    
    const consoleTest = () =>{
        console.log(cardKeys);

    }


useEffect(  () =>{
          
        const getUserInfo = async() =>{

          try{
            
            const userToken = await AsyncStorage.getItem("userToken");
            console.log(userToken);
            const config = {
              headers: {
                "Authorization" : `Bearer ${userToken}`
              }
            }

          const response = await axios.get('http://localhost:8080/users/self',config)
          if (response.status == 200){

            setUserInfo(response.data);
            console.log(response.data.company._id);
            setCompanyID(response.data.company._id);
            
            


          }
          
          }
          
          
          catch (e) {
          
          console.log(e)


    }


  }
          
          getUserInfo();



          const setCardKeys = async() =>{

            try{
            
                const userToken = await AsyncStorage.getItem("userToken");
                const config = {
                  headers: {
                    "Authorization" : `Bearer ${userToken}`
                  }
                }
    
              const response = await axios.patch(`http://localhost:8080/companies/${companyID}/cardKeys`,config)
              if (response.status == 200){
                console.log("success!");
                
                
    
              }
              
              }
              
              
              catch (e) {
              
              console.log(e)
    
    
        }



          }

          setCardKeys();
    
    
    
    
        }, [])




    
        





    
    return(

            <BackgroundColor>

                    <View style={{
                        flex: 1, 
                        backgroundColor: "transparent"
                        }}>
                
                

                
                
                <View >
                    <ScrollView horizontal ={true} showsHorizontalScrollIndicator ={false}
                    
                    style ={{
                        marginTop: 100,
                        
                        flexDirection:"row"
                
                    }}>
                        <View style ={{
                        
                        justifyContent:"space-between",
                        
                        
                        
                    }}>
                    <KeyWordButton text="club" onPress={() =>SetValue1("club")}/>
                    
                    <KeyWordButton text="alcohol" onPress={() =>SetValue2("alcohol") }/>
                
                    <KeyWordButton text="kids" onPress={() =>SetValue3("kids") }/>
                
                    <KeyWordButton text ="animals" onPress={() =>SetValue4("animals") }/>

                    <Button title ="Press Me" onPress={consoleTest}/>
                
                    </View>
                
                
                    <View style ={{
                        
                        justifyContent:"space-between",
                        
                        
                        
                    }}>
                    <KeyWordButton text="Movies"/>
                    
                    <KeyWordButton text="Music"/>
                
                    <KeyWordButton text="Concerts"/>
                
                    <KeyWordButton text ="Cars"/>
                
                    </View>
                    <View style ={{
                        
                        justifyContent:"space-between",
                        
                        
                        
                    }}>
                    <KeyWordButton text="Adult"/>
                    
                    <KeyWordButton text="Women"/>
                
                    <KeyWordButton text="Men"/>
                
                    <KeyWordButton text ="Shopping"/>
                
                    </View>
                    <View style ={{
                        
                        justifyContent:"space-between",
                        
                        
                        
                    }}>
                    <KeyWordButton text="Food"/>
                    
                    <KeyWordButton text="Fashion"/>
                
                    <KeyWordButton text="Games"/>
                
                    <KeyWordButton text ="Arcade"/>
                
                    </View>
                    <View style ={{
                        
                        justifyContent:"space-between",
                        
                        
                        
                    }}>
                    <KeyWordButton text="Food"/>
                    
                    <KeyWordButton text="Fashion"/>
                
                    <KeyWordButton text="Games"/>
                
                    <KeyWordButton text ="Arcade"/>
                
                    </View>
                    <View style ={{
                        
                        justifyContent:"space-between",
                        
                        
                        
                    }}>
                    <KeyWordButton text="Food"/>
                    
                    <KeyWordButton text="Fashion"/>
                
                    <KeyWordButton text="Games"/>
                
                    <KeyWordButton text ="Arcade"/>
                

                    </View>
                
                    </ScrollView>
                
                    </View>
                
                        
                    
                
                
                
                
                    
                
                    
                    
                    
                    
                    
                    
                    <View 
                        
                        style ={{
                        width:100,
                        position : "absolute",
                        bottom: 100, 
                        alignSelf:"center",
                        
                    }}>
                        
                        </View>
                        </View>

                    
            </BackgroundColor>



       
        
    );


    
}
export default BAddKeysScreen;