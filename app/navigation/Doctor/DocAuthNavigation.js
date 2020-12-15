import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DoctorLogin from "../../screens/Doctor/DoctorLogin";
import DocAppNavigator from "./DocAppNavigator";
import DoctorAccInfo from "../../screens/Doctor/DoctorAccInfo";

const Stack = createStackNavigator();

const DocAuthNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
    <Stack.Screen
      name="DocAppNavigator"
      component={DocAppNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default DocAuthNavigation;
