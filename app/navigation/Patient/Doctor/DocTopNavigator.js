import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DoctorOngoing from '../../../screens/DoctorOngoing';
import DoctorUpcoming from '../../../screens/DoctorUpcoming';
import ScreenVarient from '../../../components/ScreenVarient';
import colors from '../../../configs/colors';

const Tab = createMaterialTopTabNavigator();

const DocTopNavigator = () => (

  <ScreenVarient>

  <Tab.Navigator
  tabBarOptions={{
    activeTintColor:'#009687',
    labelStyle: { fontSize: 12 },
  }}
  >
      <Tab.Screen
        name="DoctorOngoing"
        component={DoctorOngoing}
        options={{ tabBarLabel: 'On going' }}
      />
      <Tab.Screen
        name="DoctorUpcoming"
        component={DoctorUpcoming}
        options={{ tabBarLabel: 'Upcoming' }}
      />
    </Tab.Navigator>
  </ScreenVarient>
    );


export default DocTopNavigator;