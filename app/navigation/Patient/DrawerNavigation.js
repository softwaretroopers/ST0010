import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppNavigator from "./AppNavigator";
import AppDrawerContent from "../../screens/Patient/AppDrawerContent";
import MainStackScreen from "./MainStackScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName="MainStackScreen"
    drawerContent={(props) => <AppDrawerContent {...props} />}
  >
    <Drawer.Screen name="MainStackScreen" component={MainStackScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
