import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppNavigator from "./AppNavigator";
import CoAppDrawerContent from "../../screens/Cooperation/CoAppDrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName="AppNavigator"
    drawerContent={(props) => <CoAppDrawerContent {...props} />}
  >
    <Drawer.Screen name="AppNavigator" component={AppNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
