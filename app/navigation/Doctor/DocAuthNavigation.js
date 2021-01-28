import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DoctorLogin from "../../screens/Doctor/DoctorLogin";
import DocAppNavigator from "./DocAppNavigator";
import colors from "../../configs/colors";

const Stack = createStackNavigator();

const DocAuthNavigation = () => (
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
      options={{
        title: "Login",
      }}
      name="DoctorLogin"
      component={DoctorLogin}
    />
    <Stack.Screen
      name="DocAppNavigator"
      component={DocAppNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default DocAuthNavigation;
