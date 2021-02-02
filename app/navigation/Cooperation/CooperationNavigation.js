import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CooperationLogin from "../../screens/Cooperation/CooperationLogin";
import CooperationHome from "../../screens/Cooperation/CooperationHome";
import CooperationUser from "../../screens/Cooperation/CooperationUser";
import CooperationUserEdit from "../../screens/Cooperation/CooperationUserEdit";
import CooperationAddNew from "../../screens/Cooperation/CooperationAddNew";
import CooperationProfile from "../../screens/Cooperation/CooperationProfile";
import CooperationProfileEdit from "../../screens/Cooperation/CooperationProfileEdit";
import CoAppDrawerContent from "../../screens/Cooperation/CoAppDrawerContent";
import colors from "../../configs/colors";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CooperationNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.themeLight,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      options={{
        title: "Login",
      }}
      name="CooperationLogin"
      component={CooperationLogin}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CoDrawerNavigation"
      component={CoDrawerNavigation}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const CoDrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName="CoAppNavigation"
    drawerContent={(props) => <CoAppDrawerContent {...props} />}
  >
    <Drawer.Screen name="CoAppNavigation" component={CoAppNavigation} />
  </Drawer.Navigator>
);

const CoAppNavigation = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.themeLight,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      name="CoHomeScreen"
      component={CoHomeScreen}
      options={{
        title: "Home",
        headerLeft: () => (
          <MaterialCommunityIcons.Button
            name="menu"
            size={24}
            color={colors.themeLight}
            backgroundColor={colors.themeDark}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <Stack.Screen
      options={{
        title: "Employee Profile",
      }}
      name="CooperationUser"
      component={CooperationUser}
    />
    <Stack.Screen
      options={{
        title: "Edit Employee Details",
      }}
      name="CooperationUserEdit"
      component={CooperationUserEdit}
    />
    <Stack.Screen
      options={{
        title: "Add New Employee",
      }}
      name="CooperationAddNew"
      component={CooperationAddNew}
    />
    <Stack.Screen
      name="CoProfile"
      component={CoProfile}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const CoProfile = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.themeDark },
      headerTintColor: colors.themeLight,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      options={{
        title: "Account Details",
      }}
      name="CooperationProfile"
      component={CooperationProfile}
    />
    <Stack.Screen
      options={{
        title: "Edit Account Details",
      }}
      name="CooperationProfileEdit"
      component={CooperationProfileEdit}
    />
  </Stack.Navigator>
);

const CoHomeScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="CooperationHome"
      component={CooperationHome}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default CooperationNavigation;
