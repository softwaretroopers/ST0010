import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DoctorTimePicker from "../../screens/Doctor/DoctorTimePicker";
import DoctorEditDate from "../../screens/Doctor/DoctorEditDate";
import DoctorAppointment from "../../screens/Doctor/DoctorAppointment";

const Stack = createStackNavigator();

const EditNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="DoctorEditDate"
      component={DoctorEditDate}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="DoctorTimePicker" component={DoctorTimePicker} />
    <Stack.Screen
      name="DoctorAppointment"
      component={DoctorAppointment}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default EditNavigator;
