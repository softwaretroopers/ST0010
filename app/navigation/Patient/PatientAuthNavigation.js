import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PatientRegister from "../../screens/Patient/PatientRegister";
import CooperationRegister from "../../screens/Patient/CooperationRegister";
import MNumberConfirmation from "../../screens/Patient/MNumberConfirmation";
import OTPConfirmation from "../../screens/Patient/OTPConfirmation";
import PatientLogin from "../../screens/Patient/PatientLogin";
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

const PatientAuthNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="PatientLogin" component={PatientLogin} />
    <Stack.Screen name="PatientRegister" component={PatientRegister} />
    <Stack.Screen name="CooperationRegister" component={CooperationRegister} />
    <Stack.Screen name="MNumberConfirmation" component={MNumberConfirmation} />
    <Stack.Screen name="OTPConfirmation" component={OTPConfirmation} />
    <Stack.Screen
      name="AppNavigator"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default PatientAuthNavigation;
