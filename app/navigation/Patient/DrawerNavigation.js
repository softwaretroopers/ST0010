import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FeedNavigator from "./FeedNavigator";
import AppDrawerContent from "../../screens/Patient/AppDrawerContent";
import PatientAuthNavigation from "./PatientAuthNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => <AppDrawerContent {...props} />}
  >
    <Drawer.Screen name="Home" component={FeedNavigator} />
    <Drawer.Screen name="Other" component={FeedNavigator} />
    <Drawer.Screen name="PatientAuth" component={PatientAuthNavigation} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
