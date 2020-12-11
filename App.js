import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/Patient/AuthNavigation";
import AppNavigator from "./app/navigation/Patient/Patient/AppNavigator";
import DocAppNavigator from "./app/navigation/Patient/Doctor/DocAppNavigator";

export default function App() {

  return (
   <NavigationContainer>
     <AuthNavigator/>
   </NavigationContainer>
  );
  
}