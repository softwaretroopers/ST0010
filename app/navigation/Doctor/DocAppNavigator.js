import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
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

const Tab = createMaterialBottomTabNavigator();

const DocAppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarColor: "#009687",
    }}
  >
    <Tab.Screen
      name="Home"
      component={DocTopNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={"white"} size={24} />
        ),
      }}
    />

    <Tab.Screen
      name="Appointment"
      component={DoctorAppointment}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar" color={"white"} size={24} />
        ),
      }}
    />

    <Tab.Screen
      name="Edit"
      component={EditNavigator}
      options={{
        title: "",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="pluscircleo" color={"white"} size={24} />
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
            color={"white"}
            size={24}
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
            color={"white"}
            size={24}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default DocAppNavigator;
