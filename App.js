import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./app/navigation/Patient/AuthNavigation";
import PatientCategory from "./app/screens/PatientCategoryModal";
import DocAppNavigator from "./app/navigation/Patient/Doctor/DocAppNavigator";
import AppNavigator from "./app/navigation/Patient/Doctor/DocAppNavigator";
<<<<<<< Updated upstream
import PatientInvoice from "./app/screens/PatientInvoice";
import PatientInvoiceBill from "./app/screens/PatientInvoiceBill";
import DoctorCompleted from "./app/screens/DoctorCompleted";
import DoctorAppointment from "./app/screens/DoctorAppointment";
import DoctorUpcoming from "./app/screens/DoctorUpcoming";
import DoctorOngoing from "./app/screens/DoctorOngoing";

export default function App() {

  return (
    < DoctorAppointment />
  );

=======
import TestExample from "./app/screens/TestExample";

export default function App() {
  return <TestExample></TestExample>;
>>>>>>> Stashed changes
}
