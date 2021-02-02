import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import PatientAuthNavigation from "./Patient/PatientAuthNavigation";
import DocAuthNavigation from "./Doctor/DocAuthNavigation";
import CooperationNavigation from "./Cooperation/CooperationNavigation";
import DrawerNavigation from "./Patient/DrawerNavigation";

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
      name="CooperationNavigation"
      component={CooperationNavigation}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="DrawerNavigation"
      component={DrawerNavigation}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default AuthNavigator;
