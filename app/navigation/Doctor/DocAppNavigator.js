import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DocTopNavigator from "./DocTopNavigator";
import DoctorAppointment from "../../screens/Doctor/DoctorAppointment";
import DoctorCompleted from "../../screens/Doctor/DoctorCompleted";
import DoctorEditDate from "../../screens/Doctor/DoctorEditDate";
import DoctorAccount from "../../screens/Doctor/DoctorAccount";

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
        tabBarBadge: 2,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="calendar-today"
            color={"white"}
            size={24}
          />
        ),
      }}
    />

    <Tab.Screen
      name="DoctorEditDate"
      component={DoctorEditDate}
      options={{
        title: "",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle-outline"
            color={"white"}
            size={24}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Completed"
      component={DoctorCompleted}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="calendar-multiple-check"
            color={"white"}
            size={24}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Account"
      component={DoctorAccount}
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
