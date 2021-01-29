import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DoctorTimePicker from "../../screens/Doctor/DoctorTimePicker";
import DoctorEditDate from "../../screens/Doctor/DoctorEditDate";
import DoctorAppointment from "../../screens/Doctor/DoctorAppointment";
import DoctorAccount from "../../screens/Doctor/DoctorAccount";
import DoctorAccInfo from "../../screens/Doctor/DoctorAccInfo";

const Stack = createStackNavigator();

const EditNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="DoctorEditDate"
      component={DoctorEditDate}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EditNavigation"
      component={EditNavigation}
      options={{ headerShown: false, tabBarVisible: true }}
    />
  </Stack.Navigator>
);

const EditNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="DoctorTimePicker" component={DoctorTimePicker} />
    <Stack.Screen name="DoctorAppointment" component={DoctorAppointment} />
    <Stack.Screen name="DoctorAccount" component={DoctorAccount} />
    <Stack.Screen name="DoctorAccInfo" component={DoctorAccInfo} />
  </Stack.Navigator>
);
export default EditNavigator;
