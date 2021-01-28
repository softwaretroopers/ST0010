import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CooperationHome from "../../screens/Cooperation/CooperationHome";
import CooperationUser from "../../screens/Cooperation/CooperationUser";
import CooperationUserEdit from "../../screens/Cooperation/CooperationUserEdit";
import CooperationAddNew from "../../screens/Cooperation/CooperationAddNew";
import CooperationProfile from "../../screens/Cooperation/CooperationProfile";
import CooperationProfileEdit from "../../screens/Cooperation/CooperationProfileEdit";

const Stack = createStackNavigator();

const CoAppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="CooperationHome"
      component={CooperationHome}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="CooperationUser" component={CooperationUser} />
    <Stack.Screen name="CooperationUserEdit" component={CooperationUserEdit} />
    <Stack.Screen name="CooperationAddNew" component={CooperationAddNew} />
    <Stack.Screen name="CooperationProfile" component={CooperationProfile} />
    <Stack.Screen
      name="CooperationProfileEdit"
      component={CooperationProfileEdit}
    />
  </Stack.Navigator>
);
export default CoAppNavigation;
