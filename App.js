import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator></AuthNavigator>
    </NavigationContainer>
  );
}
