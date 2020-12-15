import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import DocTopNavigator from "./DocTopNavigator";
import DoctorAppointment from "../../screens/Doctor/DoctorAppointment";
import DoctorCompleted from "../../screens/Doctor/DoctorCompleted";
import DoctorAccInfo from "../../screens/Doctor/DoctorAccInfo";
import colors from "../../configs/colors";
import PatientAppointment from "../../screens/Patient/PatientAppointment";
import DoctorEditDate from "../../screens/Doctor/DoctorEditDate";
import EditNavigator from "./EditNavigator";
import DocAccNavigator from "./DocAccNavigator";

const Tab = createBottomTabNavigator();

const DocAppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={DocTopNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={"#009687"} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="Appointment"
      component={DoctorAppointment}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="calendar"
            color={"#009687"}
            size={size}
          />
        ),
      }}
    />

    <Tab.Screen
      name=" "
      component={EditNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="pluscircleo" color={"#009687"} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="Completed"
      component={DoctorCompleted}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="view-grid-plus"
            color={"#009687"}
            size={size}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Acount"
      component={DocAccNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="account-box"
            color={"#009687"}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default DocAppNavigator;
