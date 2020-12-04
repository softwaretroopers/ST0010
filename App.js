import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DocAppNavigator from "./app/navigation/Patient/Doctor/DocAppNavigator";
<<<<<<< Updated upstream
import DocTopNavigator from "./app/navigation/Patient/Doctor/DocTopNavigator";

import PatientHome from "./app/screens/Patient/PatientHome";
=======
import AppNavigator from "./app/navigation/Patient/Doctor/DocAppNavigator";
import PatientCategoryDetails from "./app/screens/PatientCategoryDetails";
import UpcomingChanneling from "./app/screens/UpcomingChanneling";
import CompletedChanneling from "./app/screens/CompletedChanneling";
>>>>>>> Stashed changes

export default function App() {

  return (
<<<<<<< Updated upstream
    <NavigationContainer>
      <DocAppNavigator/>
      </NavigationContainer>
=======
    <CompletedChanneling />
>>>>>>> Stashed changes
  );
  
}