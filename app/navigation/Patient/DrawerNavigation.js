import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppNavigator from "./AppNavigator";
import AppDrawerContent from "../../screens/Patient/AppDrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName="AppNavigator"
    drawerContent={(props) => <AppDrawerContent {...props} />}
  >
    <Drawer.Screen name="AppNavigator" component={AppNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
