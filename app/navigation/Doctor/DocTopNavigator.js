import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import DoctorOngoing from "../../screens/Doctor/DoctorOngoing";
import DoctorUpcoming from "../../screens/Doctor/DoctorUpcoming";
import colors from "../../configs/colors";
import ScreenVariant from "../../components/ScreenVariant";

const Tab = createMaterialTopTabNavigator();

const DocTopNavigator = () => (
  <ScreenVariant>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#009687",
        labelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="DoctorOngoing"
        component={DoctorOngoing}
        options={{ tabBarLabel: "On going" }}
      />
      <Tab.Screen
        name="DoctorUpcoming"
        component={DoctorUpcoming}
        options={{ tabBarLabel: "Upcoming" }}
      />
    </Tab.Navigator>
  </ScreenVariant>
);

export default DocTopNavigator;
