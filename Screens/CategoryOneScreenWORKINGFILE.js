import React, { useState, useContext } from "react";
import { Text, TouchableOpacity, View, ScrollView, Button } from "react-native";
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import { useNavigation } from "@react-navigation/native";
import PressTest from "../components/PressTest/PressTest";
import BackgroundColor from "../components/Theme/BackgroundColor";
import buttonReplacement from "./KeyWordButtonReplacement";


const CategoryOneScreenTest2 = () => {
    const UMatchnavigation = useNavigation();
  
    const MatchCategoryOne = () => {
      UMatchnavigation.navigate("MatchCategoryOneScreen");
    };
    
    
  
    const[selectedItems, setSelectedItems ]= useState([]);

    const[disableItems, setDisableItems ]= useState([]);
    const[offButton1, setOffButton1 ]= useState(false);
    const[offButton2, setOffButton2 ]= useState(false);
    const[offButton3, setOffButton3 ]= useState(false);
    const[offButton4, setOffButton4 ]= useState(false);
    const[offButton5, setOffButton5 ]= useState(false);
    const[offButton6, setOffButton6 ]= useState(false);
    const[offButton7, setOffButton7 ]= useState(false);
    const[offButton8, setOffButton8 ]= useState(false);
    const[offButton9, setOffButton9 ]= useState(false);
    const[offButton10, setOffButton10 ]= useState(false);
    const[offButton11, setOffButton11 ]= useState(false);
    const[offButton12, setOffButton12 ]= useState(false);
    const[offButton13, setOffButton13 ]= useState(false);
    const[offButton14, setOffButton14 ]= useState(false);
    const[offButton15, setOffButton15 ]= useState(false);
    const[offButton16, setOffButton16 ]= useState(false); 

    
  
      const handleOnLongPress1 = (bOne) =>{
          setOffButton1(true)

          setDisableItems([...disableItems, bOne]);
    
      };
      const handleOnLongPress2 = (bTwo) =>{
        setOffButton2(true)

        setDisableItems([...disableItems, bTwo]);
  
    };
    const handleOnLongPress3 = (bThree) =>{
        setOffButton3(true)

        setDisableItems([...disableItems, bThree]);
  
    };
    const handleOnLongPress4 = (bFour) =>{
        setOffButton4(true)

        setDisableItems([...disableItems, bFour]);
  
    };
    const handleOnLongPress5 = (bFive) =>{
        setOffButton5(true)

        setDisableItems([...disableItems, bFive]);
  
    };
    const handleOnLongPress6 = (bSix) =>{
        setOffButton6(true)

        setDisableItems([...disableItems, bSix]);
  
    };
    const handleOnLongPress7 = (bSeven) =>{
        setOffButton7(true)

        setDisableItems([...disableItems, bSeven]);
  
    };
    const handleOnLongPress8 = (bEight) =>{
        setOffButton8(true)

        setDisableItems([...disableItems, bEight]);
  
    };
    const handleOnLongPress9 = (bNine) =>{
        setOffButton9(true)

        setDisableItems([...disableItems, bNine]);
  
    };
    const handleOnLongPress10 = (bTem) =>{
        setOffButton10(true)

        setDisableItems([...disableItems, bTem]);
  
    };
    const handleOnLongPress11 = (bEleven) =>{
        setOffButton11(true)

        setDisableItems([...disableItems, bEleven]);
  
    };
    const handleOnLongPress12 = (bTwelve) =>{
        setOffButton12(true)

        setDisableItems([...disableItems, bTwelve]);
  
    };
    const handleOnLongPress13 = (bThirteen) =>{
        setOffButton13(true)

        setDisableItems([...disableItems, bOne]);
  
    };
    const handleOnLongPress14 = (bFourteen) =>{
        setOffButton14(true)

        setDisableItems([...disableItems, bFourteen]);
  
    };
    const handleOnLongPress15 = (bFitfteen) =>{
        setOffButton15(true)

        setDisableItems([...disableItems, bFitfteen]);
  
    };
    const handleOnLongPress16 = (bSixteen) =>{
        setOffButton16(true)

        setDisableItems([...disableItems, bSixteen]);
  
    };
    
      const handleReset = () => {
        setDisableItems([]);
        setOffButton1(false) 
        setOffButton2(false)
        setOffButton3(false)
          setOffButton4(false)
          setOffButton5(false)
          setOffButton6(false)
          setOffButton7(false)
          setOffButton8(false)
          setOffButton9(false)
          setOffButton10(false)
          setOffButton11(false)
          setOffButton12(false)
          setOffButton13(false)
          setOffButton14(false)
          setOffButton15(false)
          setOffButton16(false)
      };
    console.log(disableItems)
      
    //const getSelected = (keywords) => { selectedItems.includes(keywords.id)}
   // console.log(selectedItems)
    
    
    /*
      const [isActive, setIsActive] = useState(false);
  
    const handleClick = (KeyWord) => {
      console.log(setIsActive)
      // 👇️ toggle
      setIsActive(current => !current);
      setIsActive([...isActive, KeyWord])
  
      setIsActive(false)
  
      // 👇️ or set to true
      // setIsActive(true);
    };
    */
  
    return (
      <BackgroundColor>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
          }}
        >
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                marginTop: 150,
  
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Button
                  title="Club"
                  onPress={() => handleOnLongPress1("Club")}
                  disabled = {offButton1}
                />
  
                <Button
                  title="Alcohol"
                  onPress={() => handleOnLongPress2("Alcohol")}
                  disabled = {offButton2}
                />
                <Button
                  title="Kids"
                  onPress={() => handleOnLongPress3("Kids")}
                  disabled = {offButton3}

                />
                <Button
                  title="animals"
                  onPress={() => handleOnLongPress4("animals")}
                  disabled = {offButton4}

                />
  
              </View>
  
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Button title="Movies" 
                 onPress={() => handleOnLongPress5("Movies")}
                 disabled = {offButton5}
                 />
  
                <Button title="Music" 
                 onPress={() => handleOnLongPress6("Music")}
                 disabled = {offButton6}
                 />
  
                <Button title="Concerts" 
                 onPress={() => handleOnLongPress7("Concerts")}
                 disabled = {offButton7}
                 />
  
                <Button title="Cars" 
                 onPress={() => handleOnLongPress8("Cars")}
                 disabled = {offButton8}
                 />
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Button title="Adult" 
                 onPress={() => handleOnLongPress9("Adult")}
                 disabled = {offButton9}
                 />
  
                <Button title="Women" 
                 onPress={() => handleOnLongPress10("Women")}
                 disabled = {offButton10}
                 />
  
                <Button title="Men" 
                 onPress={() => handleOnLongPress11("Men")}
                 disabled = {offButton11}
                 />
  
                <Button title="Shopping" 
                 onPress={() => handleOnLongPress12("Shopping")}
                 disabled = {offButton12}
                 />
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Button title="Food" 
                 onPress={() => handleOnLongPress13("Food")}
                 disabled = {offButton13}
                 />
  
                <Button title="Fashion" 
                 onPress={() => handleOnLongPress14("Fashion")}
                 disabled = {offButton14}
                 />
  
                <Button title="Games" 
                 onPress={() => handleOnLongPress15("Games")}
                 disabled = {offButton15}
                 />
  
                <Button title="Arcade" 
                 onPress={() => handleOnLongPress16("Arcade")}
                 disabled = {offButton16}
                 />
              </View>
              
  
            </ScrollView>
          </View>
  
          <View
            style={{
              position: "absolute",
              bottom: 100,
              alignSelf: "center",
            }}
          >
            <MatchNowButton onPress={MatchCategoryOne} />
            <Button title ='Reset' onPress={handleReset}></Button>
          </View>
        </View>
      </BackgroundColor>
    );
  };
  
  export default CategoryOneScreenTest2;