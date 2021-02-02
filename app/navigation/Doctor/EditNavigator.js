import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DoctorTimePicker from "../../screens/Doctor/DoctorTimePicker";
import DocAppNavigator from "./DocAppNavigator";
import DoctorAccInfoEdit from "../../screens/Doctor/DoctorAccInfoEdit";

const Stack = createStackNavigator();

const EditNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="DocAppNavigator"
      component={DocAppNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="DoctorTimePicker" component={DoctorTimePicker} />
    <Stack.Screen
      name="DoctorAccInfoEdit"
      component={DoctorAccInfoEdit}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default EditNavigator;
