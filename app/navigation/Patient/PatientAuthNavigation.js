import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PatientRegister from "../../screens/Patient/PatientRegister";
import MNumberConfirmation from "../../screens/Patient/MNumberConfirmation";
import OTPConfirmation from "../../screens/Patient/OTPConfirmation";
import PatientLogin from "../../screens/Patient/PatientLogin";
import AppNavigator from "./AppNavigator";
import colors from "../../configs/colors";

const Stack = createStackNavigator();

const PatientAuthNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.themeLight,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      name="PatientLogin"
      component={PatientLogin}
      options={{ title: "Login" }}
    />
    <Stack.Screen
      name="PatientRegister"
      component={PatientRegister}
      options={{ title: "Register" }}
    />
    <Stack.Screen name="MNumberConfirmation" component={MNumberConfirmation} />
    <Stack.Screen
      name="OTPConfirmation"
      component={OTPConfirmation}
      options={{ title: "OTP" }}
    />
    <Stack.Screen
      name="AppNavigator"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default PatientAuthNavigation;
