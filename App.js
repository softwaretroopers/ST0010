import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigation";
import AppNavigator from "./app/navigation/Patient/AppNavigator";
import PatientAccInfo from "./app/screens/Patient/PatientAccInfo";
import DoctorAccInfo from "./app/screens/Doctor/DoctorAccInfo";
import PatientNavigation from "./app/screens/Patient/PatientNavigation";
import DoctorAccount from "./app/screens/Doctor/DoctorAccount";
import DocAppNavigator from "./app/navigation/Doctor/DocAppNavigator";

export default function App() {
  return (
    <NavigationContainer>
     <AuthNavigator></AuthNavigator>
    </NavigationContainer>
  );
}
