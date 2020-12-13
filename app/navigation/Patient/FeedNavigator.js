import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FeedNavigationNavigator from "./FeedNavigationNavigator";
import PatientHome from "../../screens/Patient/PatientHome";
import DocChannelingNavigator from "./DocChannelingNavigator";
import PatientCategoryDetails from "../../screens/Patient/PatientCategoryDetails";
import PatientDateTimePicker from "../../screens/Patient/PatientDateTimePicker";
import PatientInvoice from "../../screens/Patient/PatientInvoice";
import PatientInvoiceBill from "../../screens/Patient/PatientInvoiceBill";
import PatientTopNavigator from "./PatientTopNavigator";
import PatientNavigation from "../../screens/Patient/PatientNavigation";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Patient"
      component={PatientHome}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="PatientNavigation" component={PatientNavigation} />
    <Stack.Screen
      name="PatientCategoryDetails"
      component={PatientCategoryDetails}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PatientDateTimePicker"
      component={PatientDateTimePicker}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="PatientInvoice" component={PatientInvoice} />
    <Stack.Screen name="PatientInvoiceBill" component={PatientInvoiceBill} />
    <Stack.Screen
      name="PatientTopNavigator"
      component={PatientTopNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default FeedNavigator;
