import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./app/navigation/Patient/AuthNavigation";
import AppNavigator from "./app/navigation/Patient/AppNavigator";
import PatientCategory from "./app/screens/PatientCategory";

export default function App() {
  return <PatientCategory/>;
}