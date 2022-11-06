import React, { useState, useContext } from "react";
import { Text, TouchableOpacity, View, ScrollView, Button } from "react-native";
import MatchNowButton from "../components/MatchNowButton/MatchNowButton";
import { useNavigation } from "@react-navigation/native";
import PressTest from "../components/PressTest/PressTest";
import KeyWordButton from "../components/KeyWordButton/KeyWordButton";
import BackgroundColor from "../components/Theme/BackgroundColor";
import { FlatList } from "react-native";




["Club", "alcohol", "kids", "animals"]
const availableKeyCards = [
{key:"Club" },{key:"alcohol" },{key:"concerts" },{key:"american" },
{key:"kids" },{key:"men" },{key:"cars" },{key:"games" },
{key:"dogs" },{key:"art" },{key:"music" },{key:"lunch" },
{key:"cats" },{key:"sports" },{key:"drinks" },{key:"pool" },
]


const CategoryOneScreenTest = () => {
  const UMatchnavigation = useNavigation();

  const MatchCategoryOne = () => {
    UMatchnavigation.navigate("MatchCategoryOneScreen");
  };
  
  /*
  const[selectedItems, setSelectedItems1 ]= useState([]);

  const [offButton, setOffButton1] = useState(false);
    const handleOnLongPress1 = (KeyWordButton) =>{
      // setSelectedItems(current => !current);
        setSelectedItems1([...selectedItems, KeyWordButton]);
        setOffButton1(true)
  
    };
    const handleReset = () => {
      setSelectedItems1([]);
      setOffButton1(false)
    };
    const [offButton2, setOffButton2] = useState(false);
    const handleOnLongPress2 = (KeyWordButton) =>{
      // setSelectedItems(current => !current);
        setSelectedItems([...selectedItems, KeyWordButton]);
        setOffButton1(true)
  
    };

    const buttonValue = e.pendingProps;

    let selectionsClone = { ...selections };

    if (selectionsClone[buttonValue]) {
      selectionsClone[buttonValue] = false;
    } else {
      selectionsClone[buttonValue] = true;
    }

    setSelections(selectionsClone);

    const buttonValue = e

   let selectionsClone = {...selections};

   if (selectionsClone[buttonValue]) {
    selectionsClone[buttonValue] = false;
   } else {
    selectionsClone[buttonValue] = true;
  }

  setSelections(selectionsClone);
    */
  
    const [selections, setSelections] = useState({});
    const[disableItems, setDisableItems ]= useState(false);

  const handleClick = (buttonValue) => {

    let selectionsClone = { ...selections };

    if (selectionsClone[buttonValue]) {
      selectionsClone[buttonValue] = false;
    } else {
      selectionsClone[buttonValue] = true;
    }

    setSelections(selectionsClone);
    
    



   
  };
  console.log(selections)

  const handleReset = () => {
    setSelections([]);
    setSelections(false);
    
  };
  


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
              
              <FlatList
              numColumns={4}
              data = {availableKeyCards}
              renderItem = {({ item }) => (

                <KeyWordButton disabled = {selections[item.key]} onPress={() => handleClick(item.key)} text = {(item.key)}/>
              )}
              
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

export default CategoryOneScreenTest;

/*
<KeyWordButton
                text="Club"
                onLongPress={(e) => handleClick(e)}
              />

              */