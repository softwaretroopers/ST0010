import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";
import ScreenVariant from "../components/ScreenVariant";

import AppDrawerContent from "../screens/Patient/AppDrawerContent";

import PatientAccInfo from "../screens/Patient/PatientAccInfo";
import PatientPrescriptions from "../screens/Patient/PatientPrescriptions";
import PatientHome from "../screens/Patient/PatientHome";
import PatientCategoryDetails from "../screens/Patient/PatientCategoryDetails";
import PatientDateTimePicker from "../screens/Patient/PatientDateTimePicker";
import PatientInvoice from "../screens/Patient/PatientInvoice";
import PatientInvoiceBill from "../screens/Patient/PatientInvoiceBill";
import PatientCategorySpecific from "../screens/Patient/PatientCategorySpecific";
import AnyTimeDoctor from "../screens/Patient/AnyTimeDoctor";
import ReportReading from "../screens/Patient/ReportReading";
import PatientAccInfoEdit from "../screens/Patient/PatientAccInfoEdit";
import PatientRegister from "../screens/Patient/PatientRegister";
import MNumberConfirmation from "../screens/Patient/MNumberConfirmation";
import OTPConfirmation from "../screens/Patient/OTPConfirmation";
import PatientLogin from "../screens/Patient/PatientLogin";
import AppointmentsUpcoming from "../screens/Patient/AppointmentsUpcoming";
import AppointmentsCompleted from "../screens/Patient/AppointmentsCompleted";

const PatientAuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const DoctorChannelingStack = createStackNavigator();
const AnytimeDoctorStack = createStackNavigator();
const ReportReadingStack = createStackNavigator();
const PatientHomeStack = createStackNavigator();
const PrescriptionsStack = createStackNavigator();
const AppointmentsStack = createStackNavigator();
const AccountStack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

export const PatientAuthNavigator = () => (
  <PatientAuthStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <PatientAuthStack.Screen
      name="PatientLogin"
      component={PatientLogin}
      options={{
        title: "Login",
        headerShown: false,
      }}
    />
    <PatientAuthStack.Screen
      name="PatientRegister"
      component={PatientRegister}
      options={{ title: "Register" }}
    />
    <PatientAuthStack.Screen
      name="MNumberConfirmation"
      component={MNumberConfirmation}
      options={{ title: "Enter Your Mobile Number" }}
    />
    <PatientAuthStack.Screen
      name="OTPConfirmation"
      component={OTPConfirmation}
      options={{ title: "OTP Confirmation" }}
    />
    <PatientAuthStack.Screen
      name="DrawerNavigator"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />
  </PatientAuthStack.Navigator>
);

export const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="MainNavigator"
    drawerContent={(props) => <AppDrawerContent {...props} />}
  >
    <Drawer.Screen name="MainNavigator" component={MainNavigator} />
  </Drawer.Navigator>
);

const DoctorChannelingNavigator = () => (
  <DoctorChannelingStack.Navigator>
    <DoctorChannelingStack.Screen
      options={{ title: "Doctor Channeling" }}
      name="PatientCategoryDetails"
      component={PatientCategoryDetails}
    />
    <DoctorChannelingStack.Screen
      name="PatientCategorySpecific"
      component={PatientCategorySpecific}
      options={{ title: "All Doctors" }}
    />
    <DoctorChannelingStack.Screen
      name="PatientDateTimePicker"
      component={PatientDateTimePicker}
      options={{ title: "Select Date & Time" }}
    />
    <DoctorChannelingStack.Screen
      name="PatientInvoice"
      component={PatientInvoice}
      options={{ title: "Confirmation" }}
    />
    <DoctorChannelingStack.Screen
      name="PatientInvoiceBill"
      component={PatientInvoiceBill}
      options={{ headerShown: false }}
    />
  </DoctorChannelingStack.Navigator>
);

const AnytimeDoctorNavigator = () => (
  <AnytimeDoctorStack.Navigator>
    <AnytimeDoctorStack.Screen
      name="AnyTimeDoctor"
      component={AnyTimeDoctor}
      options={{ title: "Anytime Doctor" }}
    />
    <AnytimeDoctorStack.Screen
      name="PatientInvoice"
      component={PatientInvoice}
      options={{ title: "Confirmation" }}
    />
    <AnytimeDoctorStack.Screen
      name="PatientInvoiceBill"
      component={PatientInvoiceBill}
      options={{ headerShown: false }}
    />
  </AnytimeDoctorStack.Navigator>
);

const ReportReadingNavigator = () => (
  <ReportReadingStack.Navigator>
    <ReportReadingStack.Screen
      options={{ title: "Report Reading" }}
      name="ReportReading"
      component={ReportReading}
    />
    <ReportReadingStack.Screen
      name="PatientInvoice"
      component={PatientInvoice}
    />
    <ReportReadingStack.Screen
      name="PatientInvoiceBill"
      component={PatientInvoiceBill}
    />
  </ReportReadingStack.Navigator>
);

const MainNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="DoctorChannelingNavigator"
      component={DoctorChannelingNavigator}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="AnytimeDoctorNavigator"
      component={AnytimeDoctorNavigator}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="ReportReadingNavigator"
      component={ReportReadingNavigator}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="PatientAccInfoEdit"
      component={PatientAccInfoEdit}
      options={{ headerShown: false }}
    />
  </MainStack.Navigator>
);

const BottomTabNavigator = () => (
  <BottomTab.Navigator
    activeColor={colors.white}
    screenOptions={{
      tabBarColor: colors.themeDark,
    }}
    tabBarOptions={{
      activeColor: "tomato",
      inactiveColor: "gray",
    }}
  >
    <BottomTab.Screen
      name="Home"
      component={PatientHomeNavigator}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" color={colors.white} size={24} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Prescriptions"
      component={PrescriptionsNavigator}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="book" color={colors.white} size={24} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Appointments"
      component={AppointmentsNavigator}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="calendar-clock"
            color={colors.white}
            size={24}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        title: "Profile",
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="account-box"
            color={colors.white}
            size={24}
          />
        ),
      }}
    />
  </BottomTab.Navigator>
);

const PatientHomeNavigator = ({ navigation }) => (
  <PatientHomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <PatientHomeStack.Screen
      name="HomeStack"
      component={PatientHome}
      options={{
        title: "Home",
        headerLeft: () => (
          <MaterialCommunityIcons.Button
            name="menu"
            size={24}
            color={colors.white}
            backgroundColor={colors.themeDark}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </PatientHomeStack.Navigator>
);

const PrescriptionsNavigator = ({ navigation }) => (
  <PrescriptionsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.white,
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
            color={colors.white}
            backgroundColor={colors.themeDark}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </PrescriptionsStack.Navigator>
);

const AppointmentsNavigator = ({ navigation }) => (
  <AppointmentsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <AppointmentsStack.Screen
      name="AppointmentsStack"
      component={TopTabNavigator}
      options={{
        title: "Appointments",
        headerLeft: () => (
          <MaterialCommunityIcons.Button
            name="menu"
            size={24}
            color={colors.white}
            backgroundColor={colors.themeDark}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </AppointmentsStack.Navigator>
);

const AccountNavigator = ({ navigation }) => (
  <AccountStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.white,
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
            color={colors.white}
            backgroundColor={colors.themeDark}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </AccountStack.Navigator>
);

const TopTabNavigator = () => (
  <ScreenVariant>
    <TopTab.Navigator
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
        name="DoctorOngoing"
        component={AppointmentsUpcoming}
        options={{ tabBarLabel: "Up coming" }}
      />
      <TopTab.Screen
        name="DoctorUpcoming"
        component={AppointmentsCompleted}
        options={{ tabBarLabel: "Completed" }}
      />
    </TopTab.Navigator>
  </ScreenVariant>
);
