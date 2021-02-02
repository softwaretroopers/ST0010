import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PatientHome from "../../screens/Patient/PatientHome";
import PatientCategoryDetails from "../../screens/Patient/PatientCategoryDetails";
import PatientDateTimePicker from "../../screens/Patient/PatientDateTimePicker";
import PatientInvoice from "../../screens/Patient/PatientInvoice";
import PatientInvoiceBill from "../../screens/Patient/PatientInvoiceBill";
import PatientTopNavigator from "./PatientTopNavigator";
import PatientCategorySpecific from "../../screens/Patient/PatientCategorySpecific";
import AnyTimeDoctor from "../../screens/Patient/AnyTimeDoctor";
import ReportReading from "../../screens/Patient/ReportReading";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Patient"
      component={PatientHome}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PatientCategoryDetails"
      component={PatientCategoryDetails}
    />
    <Stack.Screen
      name="PatientCategorySpecific"
      component={PatientCategorySpecific}
      options={{ headerShown: true }}
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
    <Stack.Screen name="AnyTimeDoctor" component={AnyTimeDoctor} />
    <Stack.Screen name="ReportReading" component={ReportReading} />
  </Stack.Navigator>
);
export default FeedNavigator;
