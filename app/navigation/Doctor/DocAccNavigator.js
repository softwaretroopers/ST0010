import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DoctorAccount from "../../screens/Doctor/DoctorAccount";
import DoctorAccInfoEdit from "../../screens/Doctor/DoctorAccInfoEdit";

const Stack = createStackNavigator();

const DocAccNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="DoctorAccount" component={DoctorAccount} />
    <Stack.Screen
      name="DoctorAccInfoEdit"
      component={DoctorAccInfoEdit}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default DocAccNavigator;
