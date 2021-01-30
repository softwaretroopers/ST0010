import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DoctorTimePicker from "../../screens/Doctor/DoctorTimePicker";
import DoctorAppointment from "../../screens/Doctor/DoctorAppointment";
import DocAppNavigator from "./DocAppNavigator";

const Stack = createStackNavigator();

const EditNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="DocAppNavigator"
      component={DocAppNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="DoctorTimePicker" component={DoctorTimePicker} />
  </Stack.Navigator>
);
export default EditNavigator;
