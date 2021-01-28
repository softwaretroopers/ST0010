import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import PatientAuthNavigation from "./Patient/PatientAuthNavigation";
import DocAuthNavigation from "./Doctor/DocAuthNavigation";
import CooperationAuthNavigation from "./Coopeartion/CooperationAuthNavigation";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PatientAuthNavigation"
      component={PatientAuthNavigation}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="DocAuthNavigation"
      component={DocAuthNavigation}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CooperationAuthNavigation"
      component={CooperationAuthNavigation}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default AuthNavigator;
