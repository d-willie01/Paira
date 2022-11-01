import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const KeyWordButtonContext = createContext();
const KeyWordButtonProvider = ({ children }) => {
  const [text, setText] = useState([]);

  const findKeyWordButton = async () => {
    const result = await AsyncStorage.getItem('');
    if (result !== null) setNotes(JSON.parse(result));
  };

  useEffect(() => {
    findKeyWordButton();
  }, []);

  return (
    <NoteContext.Provider value={{ notes, setNotes, findNotes }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNotes = () => useContext(NoteContext);

export default NoteProvider;