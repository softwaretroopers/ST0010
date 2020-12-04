import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import PatientHome from '../../../screens/Patient/PatientHome';
import PatientNavigation from '../../../screens/Patient/PatientNavigation';
import FeedNavigationNavigator from './FeedNavigationNavigator';
import PatientLogin from '../../../screens/Patient/PatientLogin';
import PatientRegister from '../../../screens/Patient/PatientRegister';

const Stack= createStackNavigator();

const PatientAuthNavigtion = () => (
    <Stack.Navigator >
        <Stack.Screen name="Patient" component={PatientLogin} options={{headerShown:false}} />
        <Stack.Screen name="PatientNavigation" component={PatientRegister} />
    </Stack.Navigator>
)
export default PatientAuthNavigtion;
