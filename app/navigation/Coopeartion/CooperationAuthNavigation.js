import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CooperationLogin from "../../screens/Cooperation/CooperationLogin";
import CoDrawerNavigation from "./CoDrawerNavigation";

const Stack = createStackNavigator();

const CooperationAuthNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="CooperationLogin" component={CooperationLogin} />
    <Stack.Screen
      name="CoDrawerNavigation"
      component={CoDrawerNavigation}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default CooperationAuthNavigation;
