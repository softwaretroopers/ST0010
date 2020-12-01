import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./app/navigation/Patient/AuthNavigation";
import PatientCategory from "./app/screens/PatientCategory";
import DocAppNavigator from "./app/navigation/Patient/Doctor/DocAppNavigator";
import AppNavigator from "./app/navigation/Patient/Doctor/DocAppNavigator";

export default function App() {

  return (
    <NavigationContainer>
      <DocAppNavigator />
    </NavigationContainer>
  );

}
