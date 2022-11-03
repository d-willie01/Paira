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

        setDisableItems([...disableItems, bThirteen]);
  
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
                
                      <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton1 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress1("Club")}
                          disabled = {offButton1}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Club
                              </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton2 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress2("Alcohol")}
                          disabled = {offButton2}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Alcohol
                              </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton3 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress3("Kids")}
                          disabled = {offButton3}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Kids
                              </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton4 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress4("Animal")}
                          disabled = {offButton4}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Animal
                              </Text>
                    </TouchableOpacity>
                    
  
              </View>
  
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton5 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress5("Movies")}
                          disabled = {offButton5}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Movies
                              </Text>
                    </TouchableOpacity>
  
                    <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton6 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress6("Concerts")}
                          disabled = {offButton6}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Concerts
                              </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton7 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress7("Cars")}
                          disabled = {offButton7}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Cars
                              </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton8 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress8("Places")}
                          disabled = {offButton8}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Places
                              </Text>
                    </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton9 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress9("Adult")}
                          disabled = {offButton9}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Adult
                              </Text>
                    </TouchableOpacity>
      
                 <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton10 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress10("Women")}
                          disabled = {offButton10}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Women
                              </Text>
                    </TouchableOpacity>
                 <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton11 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress11("Men")}
                          disabled = {offButton11}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Men
                              </Text>
                    </TouchableOpacity>
                 <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton12 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress12("Shopping")}
                          disabled = {offButton12}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Shopping
                              </Text>
                    </TouchableOpacity>
  
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton13 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress13("Food")}
                          disabled = {offButton13}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Food
                              </Text>
                    </TouchableOpacity>
              
                 <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton14 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress14("Fashion")}
                          disabled = {offButton14}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Fashion
                              </Text>
                    </TouchableOpacity>
                 <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton15 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress15("Games")}
                          disabled = {offButton15}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Games
                              </Text>
                    </TouchableOpacity>
                 <TouchableOpacity 
                        //onLongPress ={() => console.log(text)}
                        style={{height:110,
                            width:123,
                            borderRadius:75,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: `${offButton16 ? "#878787" : "#FF9100"}`
                             
                          }}
                          onPress={() => handleOnLongPress16("Arcade")}
                          disabled = {offButton16}
                          > 
                          <Text numberOfLines={1} style={{
                              fontSize:17,
                              fontWeight:'900',
                              color:'white',
                              textAlign:'center',
                              alignSelf:'center',
                              fontStyle:'italic',
                              
                              }}> Arcade
                              </Text>
                    </TouchableOpacity>
  
    
              </View>
              
  
            </ScrollView>
          </View>
  
          <View
            style={{
              position: "absolute",
              bottom: 100,
              alignSelf: "center",
              bottom: '5%',
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