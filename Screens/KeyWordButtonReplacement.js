import React from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View, Button} from 'react-native'


const buttonReplacement = ({ children, onClick, selected }) => {
    return (
      <Button
        onClick={onClick}
        style={{
          color: "white",
          background: `${selected ? "blue" : "red"}`,
        }}
      >
        {children}
      </Button>
    );
  };

  export default buttonReplacement;

  /*
  const availableKeyCards = ["Club", "alcohol", "kids", "animals"];

  const [selections, setSelections] = useState({});


  const handleClick = (e) => {
    const buttonValue = e.target.innerText;

    let selectionsClone = { ...selections };


  if (selectionsClone[buttonValue]) {
    selectionsClone[buttonValue] = false;
  } else {
    selectionsClone[buttonValue] = true;
  }

  setSelections(selectionsClone);
};

console.log(selections);
*/
/*
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



    */