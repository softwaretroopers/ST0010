import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DoctorLogin from "../../screens/Doctor/DoctorLogin";
import EditNavigator from "./EditNavigator";
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
      name="EditNavigator"
      component={EditNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default DocAuthNavigation;
