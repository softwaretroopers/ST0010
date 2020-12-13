import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PatientLogin from "../../screens/Patient/PatientLogin";
import PatientNavigation from "../../screens/Patient/PatientNavigation";

const Stack = createStackNavigator();

const FeedNavigationNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PatientNavigation"
      component={PatientNavigation}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PatientLogin"
      component={PatientLogin}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default FeedNavigationNavigator;
