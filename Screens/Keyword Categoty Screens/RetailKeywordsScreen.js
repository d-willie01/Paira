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
    {key:"Shop" },{key:"Department" },{key:"Fashion" },{key:"Self-Care" },
    {key:"Grocery" },{key:"Specialty" },{key:"Accessories" },{key:"DIY" },
    {key:"Jewlery" },{key:"Thrift" },{key:"Education" },{key:"Health" },
    {key:"Discount" },{key:"Variety" },{key:"Mall" },{key:"Hygene" },
]


const RetialKeywords = () => {
  const UMatchnavigation = useNavigation();

  const MatchCategoryOne = () => {
    UMatchnavigation.navigate("MatchCategoryOneScreen");
  };
  
  
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

export default RetialKeywords;