import React, { useState, useContext } from "react";
import { Text, TouchableOpacity, View, ScrollView, Button, RecyclerViewBackedScrollViewComponent } from "react-native";
import MatchNowButton from "../../components/MatchNowButton/MatchNowButton";
import { useNavigation } from "@react-navigation/native";
import PressTest from "../../components/PressTest/PressTest";
import KeyWordButton from "../../components/KeyWordButton/KeyWordButton";
import BackgroundColor from "../../components/Theme/BackgroundColor";
import { FlatList } from "react-native";




["Club", "alcohol", "kids", "animals"]
const availableKeyCards = [
{key:"Mexican" },{key:"Alcohol" },{key:"Indian" },{key:"American" },
{key:"Fast Food" },{key:"Upscale" },{key:"Casual" },{key:"Wine" },
{key:"Mediteranean" },{key:"Dinner" },{key:"Breakfast" },{key:"Lunch" },
{key:"Greek" },{key:"Chinese" },{key:"Noodles" },{key:"Vegan" },
]


const FoodAndDinningKeyword = () => {
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
    const[arr, setArr ]= useState([]);

  const handleClick = (buttonValue) => {

    let selectionsClone = { ...selections };

    if (selectionsClone[buttonValue]) {
      selectionsClone[buttonValue] = false;
    } else {
      selectionsClone[buttonValue] = true;
    }

    setSelections(selectionsClone);
    
    const keyWordArray = (obj) => {
      let kewWordArr = [];
      for (let key in obj) {
        if (obj[key]) {
          kewWordArr.push(key)
        }
      }
      return kewWordArr
    }
    
    const arrayFromObject = keyWordArray(selectionsClone)
    setArr(arrayFromObject)
    console.log(arrayFromObject);

    
  };

  console.log(selections)
  const getKeyWords = () =>{
    const keywordQuery = "&cardKeys=" + arr.join("&cardKeys=")
    const fullQueryMatchOne = `http://localhost:8080/cards?industry=food%20%26%20dining${keywordQuery}`
    console.log(fullQueryMatchOne)
    handleReset()
  };

  const handleReset = () => {
    setSelections([]);
    setSelections(false);
    setArr([])
    
    
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

                <KeyWordButton  selected={selections[item.key]} disabled = {selections[item.key]} onPress={() => handleClick(item.key)} text = {(item.key)}/>
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
          <MatchNowButton onPress= {()=>getKeyWords()} />
          <Button title ='Reset' onPress={handleReset}></Button>
        </View>
      </View>
    </BackgroundColor>
  );
};

export default FoodAndDinningKeyword;

/*
<KeyWordButton
                text="Club"
                onLongPress={(e) => handleClick(e)}
              />

              */