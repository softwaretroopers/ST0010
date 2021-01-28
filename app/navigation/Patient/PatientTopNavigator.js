import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ScreenVariant from "../../components/ScreenVariant";
import AppointmentsUpcoming from "../../screens/Patient/AppointmentsUpcoming";
import AppointmentsCompleted from "../../screens/Patient/AppointmentsCompleted";

const Tab = createMaterialTopTabNavigator();

const PatientTopNavigator = () => (
  <ScreenVariant>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#009687",
        labelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="DoctorOngoing"
        component={AppointmentsUpcoming}
        options={{ tabBarLabel: "Up coming" }}
      />
      <Tab.Screen
        name="DoctorUpcoming"
        component={AppointmentsCompleted}
        options={{ tabBarLabel: "Completed" }}
      />
    </Tab.Navigator>
  </ScreenVariant>
);

export default PatientTopNavigator;
