import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ScreenVarient from '../../../components/ScreenVarient';
import UpcomingChanneling from '../../../screens/Patient/UpcomingChanneling';
import CompletedChanneling from '../../../screens/Patient/CompletedChanneling';

const Tab = createMaterialTopTabNavigator();

const PatientTopNavigator = () => (

  <ScreenVarient>

  <Tab.Navigator
  tabBarOptions={{
    activeTintColor:'#009687',
    labelStyle: { fontSize: 12 },
  }}
  >
      <Tab.Screen
        name="DoctorOngoing"
        component={UpcomingChanneling}
        options={{ tabBarLabel: 'Up coming' }}
      />
      <Tab.Screen
        name="DoctorUpcoming"
        component={CompletedChanneling}
        options={{ tabBarLabel: 'Completed' }}
      />
    </Tab.Navigator>
  </ScreenVarient>
    );


export default PatientTopNavigator;