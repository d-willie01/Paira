import React from "react";
import StateProvider from "./StateManagement/StateProvider";
import AppNavigator from "./Index";




export default function App() {
  
  
  return (
    
    <StateProvider>
      <AppNavigator/>
    </StateProvider>
    

  )
  
  };




