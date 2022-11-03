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

    
  
      const handleOnLongPress1 = (KeyWordButton) =>{
          setOffButton1(true) 
          setOffButton2(true)
          setOffButton3(true)
          setOffButton4(true)
          setOffButton5(true)
          setOffButton6(true)
          setOffButton7(true)
          setOffButton8(true)
          setOffButton9(true)
          setOffButton10(true)
          setOffButton11(true)
          setOffButton12(true)
          setOffButton13(true)
          setOffButton14(true)
          setOffButton15(true)
          setOffButton16(true)
          

          setDisableItems([...disableItems, KeyWordButton]);
    
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
                  onPress={() => handleOnLongPress1("Alcohol")}
                  disabled = {offButton2}
                />
                <Button
                  title="Kids"
                  onPress={() => handleOnLongPress1("Kids")}
                  disabled = {offButton3}
                />
                <Button
                  title="animals"
                  onPress={() => handleOnLongPress1("animals")}
                  disabled = {offButton4}
                />
  
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Button title="Movies" 
                 onPress={() => handleOnLongPress1("Movies")}
                 disabled = {offButton5}/>
  
                <Button title="Music" 
                 onPress={() => handleOnLongPress1("Music")}
                 disabled = {offButton6}/>
  
                <Button title="Concerts" 
                 onPress={() => handleOnLongPress1("Concerts")}
                 disabled = {offButton7}/>
  
                <Button title="Cars" 
                 onPress={() => handleOnLongPress1("Cars")}
                 disabled = {offButton8}/>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Button title="Adult" 
                 onPress={() => handleOnLongPress1("Adult")}
                 disabled = {offButton9}/>
  
                <Button title="Women" 
                 onPress={() => handleOnLongPress1("Women")}
                 disabled = {offButton10}/>
  
                <Button title="Men" 
                 onPress={() => handleOnLongPress1("Men")}
                 disabled = {offButton11}/>
  
                <Button title="Shopping" 
                 onPress={() => handleOnLongPress1("Shopping")}
                 disabled = {offButton12}/>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Button title="Food" 
                 onPress={() => handleOnLongPress1("Food")}
                 disabled = {offButton13}/>
  
                <Button title="Fashion" 
                 onPress={() => handleOnLongPress1("Fashion")}
                 disabled = {offButton14}/>
  
                <Button title="Games" 
                 onPress={() => handleOnLongPress1("Games")}
                 disabled = {offButton15}/>
  
                <Button title="Arcade" 
                 onPress={() => handleOnLongPress1("Arcade")}
                 disabled = {offButton16}/>
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

  /*
  const CategoryOneScreenTest2 = () => {
    const UMatchnavigation = useNavigation();
  
    const MatchCategoryOne = () => {
      UMatchnavigation.navigate("MatchCategoryOneScreen");
    };
    const state ={
      disable: false
    }
  
    const[selectedItems, setSelectedItems ]= useState([]);
    
  
      const handleOnLongPress1 = (KeyWordButton) =>{
        // setSelectedItems(current => !current);
          setSelectedItems([...selectedItems, KeyWordButton]);
    
      };
      const handleReset = () => {
        setSelectedItems([]);
      };
      
    //const getSelected = (keywords) => { selectedItems.includes(keywords.id)}
    console.log(selectedItems)
    
    
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
/*
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
                    onLongPress={() => handleOnLongPress1("Club")}
                  />
    
                  <Button
                    title="Alcohol"
                    onLongPress={() => handleOnLongPress("Alcohol")}
                  />
                  <Button
                    title="Kids"
                    onLongPress={() => handleOnLongPress("Kids")}
                  />
                  <Button
                    title="animals"
                    onLongPress={() => handleOnLongPress("animals")}
                  />
    
                </View>
    
                <View
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <KeyWordButton text="Movies" 
                   onLongPress={() => handleOnLongPress("Movies")}/>
    
                  <KeyWordButton text="Music" 
                   onLongPress={() => handleOnLongPress("Music")}/>
    
                  <KeyWordButton text="Concerts" 
                   onLongPress={() => handleOnLongPress("Concerts")}/>
    
                  <KeyWordButton text="Cars" 
                   onLongPress={() => handleOnLongPress("Cars")}/>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <KeyWordButton text="Adult" 
                   onLongPress={() => handleOnLongPress("Adult")}/>
    
                  <KeyWordButton text="Women" 
                   onLongPress={() => handleOnLongPress("Women")}/>
    
                  <KeyWordButton text="Men" 
                   onLongPress={() => handleOnLongPress("Men")}/>
    
                  <KeyWordButton text="Shopping" 
                   onLongPress={() => handleOnLongPress("Shopping")}/>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <KeyWordButton text="Food" 
                   onLongPress={() => handleOnLongPress("Food")}/>
    
                  <KeyWordButton text="Fashion" 
                   onLongPress={() => handleOnLongPress("Fashion")}/>
    
                  <KeyWordButton text="Games" 
                   onLongPress={() => handleOnLongPress("Games")}/>
    
                  <KeyWordButton text="Arcade" 
                   onLongPress={() => handleOnLongPress("Arcade")}/>
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




  */

    /*

    const CategoryOneScreenTest2 = () => {
    const UMatchnavigation = useNavigation();
  
    const MatchCategoryOne = () => {
      UMatchnavigation.navigate("MatchCategoryOneScreen");
    };
    const state ={
      disable: false
    }
  
    const[selectedItems, setSelectedItems ]= useState([]);

    const[disableItems, setDisableItems ]= useState([]);
    
    const disabledItems = false
  
      const handleOnLongPress1 = (KeyWordButton) =>{
        // setSelectedItems(current => !current);
          setDisableItems([...disableItems, KeyWordButton]);
    
      };
      console.log(disableItems)
      const handleReset = () => {
        setDisableItems([]);
      };
      
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
   /*
  
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
                    disabled ={disabledItems}
                  />
    
                  <Button
                    title="Alcohol"
                    onPress={() => handleOnLongPress1("Alcohol")}
                  />
                  <Button
                    title="Kids"
                    onLongPress={() => handleOnLongPress("Kids")}
                  />
                  <Button
                    title="animals"
                    onLongPress={() => handleOnLongPress("animals")}
                  />
    
                </View>
*/