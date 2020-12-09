import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/Patient/AuthNavigation";
import AppNavigator from "./app/navigation/Patient/Patient/AppNavigator";

export default function App() {

  return (
   <NavigationContainer>
     <AppNavigator/>
   </NavigationContainer>
  );
  
}