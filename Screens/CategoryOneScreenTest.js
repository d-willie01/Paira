import React, { useState, useContext } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import { useNavigation } from "@react-navigation/native";
import PressTest from "../components/PressTest/PressTest";
import KeyWordButton from "../components/KeyWordButton/KeyWordButton";
import BackgroundColor from "../components/Theme/BackgroundColor";

const availableKeyCards = ["Club", "alcohol", "kids", "animals"];

const CategoryOneScreenTest = () => {
  const UMatchnavigation = useNavigation();

  const MatchCategoryOne = () => {
    UMatchnavigation.navigate("MatchCategoryOneScreen");
  };
  
  const [selections, setSelections] = useState({});

  const handleClick = (e) => {
   console.log(e) 
   const buttonValue = e;

    let selectionsClone = { ...selections };

    if (selectionsClone[buttonValue]) {
      selectionsClone[buttonValue] = false;
    } else {
      selectionsClone[buttonValue] = true;
    }

    setSelections(selectionsClone);
  };
  
  console.log(selections);

/*
  const [selectedItems, setSelectedItems] = useState([]);
    

  const handleOnLongPress = (keywords) => {
    setSelectedItems([...selectedItems, keywords]);
  };
  console.log(selectedItems);
  //const getSelected = (keywords) => { selectedItems.includes(keywords.id)}
    

  
  
  
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
                onLongPress={(e) => handleClick(e)}
              />

              <KeyWordButton
                text="alcohol"
                onLongPress={() => handleOnLongPress("Alcohol")}
              />

              <KeyWordButton
                text="kids"
                onLongPress={() => handleOnLongPress("Kids")}
              />

              <KeyWordButton text="animals" />
            </View>
            

            {/* <View
              style={{
                justifyContent: "space-between",
              }}
            >
              <KeyWordButton text="Movies" />

              <KeyWordButton text="Music" />

              <KeyWordButton text="Concerts" />

              <KeyWordButton text="Cars" />
            </View>
            <View
              style={{
                justifyContent: "space-between",
              }}
            >
              <KeyWordButton text="Adult" />

              <KeyWordButton text="Women" />

              <KeyWordButton text="Men" />

              <KeyWordButton text="Shopping" />
            </View>
            <View
              style={{
                justifyContent: "space-between",
              }}
            >
              <KeyWordButton text="Food" />

              <KeyWordButton text="Fashion" />

              <KeyWordButton text="Games" />

              <KeyWordButton text="Arcade" />
            </View>
            <View
              style={{
                justifyContent: "space-between",
              }}
            >
              <KeyWordButton text="Food" />

              <KeyWordButton text="Fashion" />

              <KeyWordButton text="Games" />

              <KeyWordButton text="Arcade" />
            </View>
            <View
              style={{
                justifyContent: "space-between",
              }}
            >
              <KeyWordButton text="Food" />

              <KeyWordButton text="Fashion" />

              <KeyWordButton text="Games" />

              <KeyWordButton text="Arcade" />
            </View> */}
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
        </View>
      </View>
    </BackgroundColor>
  );
};

export default CategoryOneScreenTest;