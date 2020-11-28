import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./app/navigation/AuthNavigation";
import {createStackNavigator} from '@react-navigation/stack';

import DatePicker from "./app/screens/DatePicker";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return <NavigationContainer>
    <AppNavigator/>
  </NavigationContainer>;
}
