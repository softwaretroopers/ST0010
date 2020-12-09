import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/Patient/AuthNavigation";

export default function App() {

  return (
   <NavigationContainer>
     <AuthNavigator/>
   </NavigationContainer>
  );
  
}