import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PatientCategoryDetails from "../../screens/Patient/PatientCategoryDetails";
import PatientDateTimePicker from "../../screens/Patient/PatientDateTimePicker";
import PatientInvoice from "../../screens/Patient/PatientInvoice";
import PatientInvoiceBill from "../../screens/Patient/PatientInvoiceBill";
import PatientCategorySpecific from "../../screens/Patient/PatientCategorySpecific";
import AnyTimeDoctor from "../../screens/Patient/AnyTimeDoctor";
import ReportReading from "../../screens/Patient/ReportReading";
import AppNavigator from "./AppNavigator";
import PatientAccInfoEdit from "../../screens/Patient/PatientAccInfoEdit";

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const AnyTimeStack = createStackNavigator();
const ReportStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="PatientCategoryDetails"
      component={PatientCategoryDetails}
    />
    <HomeStack.Screen
      name="PatientCategorySpecific"
      component={PatientCategorySpecific}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="PatientDateTimePicker"
      component={PatientDateTimePicker}
      options={{ title: "Select Date & Time" }}
    />
    <HomeStack.Screen
      name="PatientInvoice"
      component={PatientInvoice}
      options={{ title: "Confirmation" }}
    />
    <HomeStack.Screen
      name="PatientInvoiceBill"
      component={PatientInvoiceBill}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

const AnyTimeStackScreen = () => (
  <AnyTimeStack.Navigator>
    <AnyTimeStack.Screen
      name="AnyTimeDoctor"
      component={AnyTimeDoctor}
      options={{ title: "Anytime Doctors" }}
    />
    <AnyTimeStack.Screen
      name="PatientInvoice"
      component={PatientInvoice}
      options={{ title: "Confirmation" }}
    />
    <AnyTimeStack.Screen
      name="PatientInvoiceBill"
      component={PatientInvoiceBill}
      options={{ headerShown: false }}
    />
  </AnyTimeStack.Navigator>
);

const ReportStackScreen = () => (
  <ReportStack.Navigator>
    <ReportStack.Screen name="ReportReading" component={ReportReading} />
    <ReportStack.Screen name="PatientInvoice" component={PatientInvoice} />
    <ReportStack.Screen
      name="PatientInvoiceBill"
      component={PatientInvoiceBill}
    />
  </ReportStack.Navigator>
);

const MainStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HomeStackScreen"
      component={HomeStackScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AnyTimeStackScreen"
      component={AnyTimeStackScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ReportStackScreen"
      component={ReportStackScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PatientAccInfoEdit"
      component={PatientAccInfoEdit}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default MainStackScreen;