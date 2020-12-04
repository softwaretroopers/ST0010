import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DocAppNavigator from "./app/navigation/Patient/Doctor/DocAppNavigator";
import DocTopNavigator from "./app/navigation/Patient/Doctor/DocTopNavigator";
import AppNavigator from "./app/navigation/Patient/Patient/AppNavigator";
import PatientCategoryModal from "./app/screens/Patient/PatientCategoryModal";
import PatientHome from "./app/screens/Patient/PatientHome";


export default function App() {

  return (
    // <NavigationContainer>
      <PatientCategoryModal/>
      // </NavigationContainer>

  );
  
}