import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PatientAccInfo from "../../screens/Patient/PatientAccInfo";
import FeedNavigator from "./FeedNavigator";
import PatientPrescriptions from "../../screens/Patient/PatientPrescriptions";
import PatientTopNavigator from "./PatientTopNavigator";
import DrawerNavigation from "./DrawerNavigation";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={DrawerNavigation}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="Prescriptions"
      component={PatientPrescriptions}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="book" color={color} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="Appointments"
      component={PatientTopNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="calendar-clock"
            color={color}
            size={size}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Account"
      component={PatientAccInfo}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="account-box"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
