import React from "react";
import { Button } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PatientAccInfo from "../../screens/Patient/PatientAccInfo";
import PatientPrescriptions from "../../screens/Patient/PatientPrescriptions";
import PatientTopNavigator from "./PatientTopNavigator";
import colors from "../../configs/colors";
import PatientHome from "../../screens/Patient/PatientHome";

const HomeStack = createStackNavigator();
const PrescriptionsStack = createStackNavigator();
const AppointmentsStack = createStackNavigator();
const AccountStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    activeColor={colors.themeLight}
    screenOptions={{
      tabBarColor: colors.themeDark,
    }}
    tabBarOptions={{
      activeColor: "tomato",
      inactiveColor: "gray",
    }}
  >
    <Tab.Screen
      name="Home"
      component={PatientHomeScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="home"
            color={colors.themeLight}
            size={24}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Prescriptions"
      component={PrescriptionsStackScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="book"
            color={colors.themeLight}
            size={24}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Appointments"
      component={AppointmentsStackScreen}
      options={{
        tabBarBadge: 2,
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="calendar-clock"
            color={colors.themeLight}
            size={24}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Account"
      component={AccountStackScreen}
      options={{
        title: "Profile",
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="account-box"
            color={colors.themeLight}
            size={24}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;

const PatientHomeScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.themeLight,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="HomeStack"
      component={PatientHome}
      options={{
        title: "Home",
        headerLeft: () => (
          <MaterialCommunityIcons.Button
            name="menu"
            size={24}
            color={colors.themeLight}
            backgroundColor={colors.themeDark}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const PrescriptionsStackScreen = ({ navigation }) => (
  <PrescriptionsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.themeLight,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <PrescriptionsStack.Screen
      name="PrescriptionsStack"
      component={PatientPrescriptions}
      options={{
        title: "Prescriptions",
        headerLeft: () => (
          <MaterialCommunityIcons.Button
            name="menu"
            size={24}
            color={colors.themeLight}
            backgroundColor={colors.themeDark}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </PrescriptionsStack.Navigator>
);

const AppointmentsStackScreen = ({ navigation }) => (
  <AppointmentsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.themeLight,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <AppointmentsStack.Screen
      name="AppointmentsStack"
      component={PatientTopNavigator}
      options={{
        title: "Appointments",
        headerLeft: () => (
          <MaterialCommunityIcons.Button
            name="menu"
            size={24}
            color={colors.themeLight}
            backgroundColor={colors.themeDark}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </AppointmentsStack.Navigator>
);

const AccountStackScreen = ({ navigation }) => (
  <AccountStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.themeLight,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <AccountStack.Screen
      name="AccountStack"
      component={PatientAccInfo}
      options={{
        title: "Profile",
        headerLeft: () => (
          <MaterialCommunityIcons.Button
            name="menu"
            size={24}
            color={colors.themeLight}
            backgroundColor={colors.themeDark}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </AccountStack.Navigator>
);
