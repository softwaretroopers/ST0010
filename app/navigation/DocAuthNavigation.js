import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import DoctorLogin from "../screens/Doctor/DoctorLogin";
import DoctorEditDate from "../screens/Doctor/DoctorEditDate";
import DoctorAccount from "../screens/Doctor/DoctorAccount";
import DoctorOngoing from "../screens/Doctor/DoctorOngoing";
import DoctorUpcoming from "../screens/Doctor/DoctorUpcoming";
import DoctorCompleted from "../screens/Doctor/DoctorCompleted";
import DoctorTimePicker from "../screens/Doctor/DoctorTimePicker";
import DoctorAccInfoEdit from "../screens/Doctor/DoctorAccInfoEdit";

import colors from "../configs/colors";
import ScreenVariant from "../components/ScreenVariant";

const Stack = createStackNavigator();
const BotTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const EditStack = createStackNavigator();

const DocAuthNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.themeLight,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      options={{
        title: "Login",
      }}
      name="DoctorLogin"
      component={DoctorLogin}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EditNavigator"
      component={EditNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const EditNavigator = () => (
  <EditStack.Navigator>
    <EditStack.Screen
      name="DocAppNavigator"
      component={DocAppNavigator}
      options={{ headerShown: false }}
    />
    <EditStack.Screen name="DoctorTimePicker" component={DoctorTimePicker} />
    <EditStack.Screen
      name="DoctorAccInfoEdit"
      component={DoctorAccInfoEdit}
      options={{ headerShown: false }}
    />
  </EditStack.Navigator>
);

const DocAppNavigator = () => (
  <BotTab.Navigator
    barStyle={{ backgroundColor: colors.themeDark }}
    activeColor={colors.white}
  >
    <BotTab.Screen
      name="Home"
      component={DocTopNavigator}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" color={colors.white} size={24} />
        ),
      }}
    />

    <BotTab.Screen
      name="DoctorEditDate"
      component={DoctorEditDate}
      options={{
        title: "Schedule",
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="calendar"
            color={colors.white}
            size={25}
          />
        ),
      }}
    />

    <BotTab.Screen
      name="Account"
      component={DoctorAccount}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="account-box"
            color={colors.white}
            size={24}
          />
        ),
      }}
    />
  </BotTab.Navigator>
);

const DocTopNavigator = () => (
  <ScreenVariant>
    <TopTab.Navigator
      initialRouteName={DoctorOngoing}
      tabBarOptions={{
        inactiveTintColor: colors.medium,
        activeTintColor: colors.themeDark,
        labelStyle: { fontSize: 12 },
        indicatorStyle: {
          borderBottomColor: colors.themeDark,
          borderBottomWidth: 2,
        },
      }}
    >
      <TopTab.Screen
        name="DoctorUpcoming"
        component={DoctorUpcoming}
        options={{ tabBarLabel: "Upcoming" }}
      />
      <TopTab.Screen
        name="DoctorOngoing"
        component={DoctorOngoing}
        options={{ tabBarLabel: "On going" }}
      />
      <TopTab.Screen
        name="DoctorCompleted"
        component={DoctorCompleted}
        options={{ tabBarLabel: "Completed" }}
      />
    </TopTab.Navigator>
  </ScreenVariant>
);

export default DocAuthNavigation;
