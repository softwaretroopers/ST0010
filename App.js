import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./app/navigation/AuthNavigation";
import DatePicker from "./app/screens/DatePicker";
import DoctorAccInfo from "./app/screens/DoctorAccInfo";
import PatientLogin from "./app/screens/PatientLogin";
import TestExample from "./app/screens/TestExample";

export default function App() {
  return <NavigationContainer>
    <AuthNavigator/>
  </NavigationContainer>;
}
