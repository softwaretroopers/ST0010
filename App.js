import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  PatientAuthNavigator,
  DrawerNavigator,
} from "./app/navigation/PatientAuthNavigator";
import DocAuthNavigation from "./app/navigation/Doctor/DocAuthNavigation";
import CooperationNavigation from "./app/navigation/Cooperation/CooperationNavigation";

import WelcomeScreen from "./app/screens/WelcomeScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="PatientAuthNavigation"
          component={PatientAuthNavigator}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="DocAuthNavigation"
          component={DocAuthNavigation}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CooperationNavigation"
          component={CooperationNavigation}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="DrawerNavigation"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
