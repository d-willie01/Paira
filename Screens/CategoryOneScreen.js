import React, { useState, useContext } from "react";
import { Text, TouchableOpacity, View, ScrollView, Button } from "react-native";
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import { useNavigation } from "@react-navigation/native";
import PressTest from "../components/PressTest/PressTest";
import KeyWordButton from "../components/KeyWordButton/KeyWordButton";
import BackgroundColor from "../components/Theme/BackgroundColor";

const data = ["hello world"];

const CategoryOneScreen = () => {
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
              <KeyWordButton
                text="Club"
                onLongPress={() => handleOnLongPress1("Club")}
              />

              <KeyWordButton
                text="alcohol"
                onLongPress={() => handleOnLongPress("Alcohol")}
              />

              <KeyWordButton
                text="kids"
                onLongPress={() => handleOnLongPress("Kids")}
              />

              <KeyWordButton text="animals"
               onLongPress={() => handleOnLongPress("Animals")} />
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

export default CategoryOneScreen;

/* <TouchableOpacity style={{
          backgroundColor: isActive ? 'white' : 'yellow',
          colors: isActive ? '#777777','#878787' : '#FF9100','#FFA42B'
            }}>
<KeyWordButton
                text="club"
                colors={isActive ? "#777777" : "#FF9100"}
                onLongPress={handleClick}
              />
<TouchableOpacity
              color={isActive ? "#777777" : "#FF9100"}
              
              onPress={() => handleOnLongPress("Club")}>
*/
