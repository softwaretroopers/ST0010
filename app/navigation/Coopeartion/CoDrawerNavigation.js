import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CoAppNavigation from "./CoAppNavigation";
import CoAppDrawerContent from "../../screens/Cooperation/CoAppDrawerContent";

const Drawer = createDrawerNavigator();

const CoDrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName="CoAppNavigation"
    drawerContent={(props) => <CoAppDrawerContent {...props} />}
  >
    <Drawer.Screen name="CoAppNavigation" component={CoAppNavigation} />
  </Drawer.Navigator>
);

export default CoDrawerNavigation;
