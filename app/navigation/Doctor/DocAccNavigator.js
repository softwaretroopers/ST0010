import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DoctorTimePicker from "../../screens/Doctor/DoctorTimePicker";
import DoctorEditDate from "../../screens/Doctor/DoctorEditDate";
import DoctorAppointment from "../../screens/Doctor/DoctorAppointment";
import DoctorAccount from "../../screens/Doctor/DoctorAccount";
import DoctorAccInfo from "../../screens/Doctor/DoctorAccInfo";

const Stack = createStackNavigator();

const DocAccNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="DoctorAccount" component={DoctorAccount} />
     <Stack.Screen name="DoctorAccInfo" component={DoctorAccInfo} options={{headerShown:false}} />
  </Stack.Navigator>
);
export default DocAccNavigator;
