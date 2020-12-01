import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import PatientHome from '../../screens/PatientHome';
import PatientNavigation from '../../screens/PatientNavigation';
import FeedNavigationNavigator from './FeedNavigationNavigator';
import PatientLogin from '../../screens/PatientLogin';
import PatientRegister from '../../screens/PatientRegister';

const Stack= createStackNavigator();

const PatientAuthNavigtion = () => (
    <Stack.Navigator >
        <Stack.Screen name="Patient" component={PatientLogin} options={{headerShown:false}} />
        <Stack.Screen name="PatientNavigation" component={PatientRegister} />
    </Stack.Navigator>
)
export default PatientAuthNavigtion;
