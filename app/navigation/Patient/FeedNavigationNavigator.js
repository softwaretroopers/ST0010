import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PatientLogin from "../../screens/Patient/PatientLogin";

const Stack = createStackNavigator();

const FeedNavigationNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PatientLogin"
      component={PatientLogin}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default FeedNavigationNavigator;
