import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DocAppNavigator from "./app/navigation/Patient/Doctor/DocAppNavigator";
import DocTopNavigator from "./app/navigation/Patient/Doctor/DocTopNavigator";

import PatientHome from "./app/screens/PatientHome";

export default function App() {

  return (
    <NavigationContainer>
      <DocAppNavigator/>
      </NavigationContainer>
  );
  
}