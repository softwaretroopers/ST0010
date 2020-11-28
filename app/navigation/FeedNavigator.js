import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import PatientHome from '../screens/PatientHome';
import PatientNavigation from '../screens/PatientNavigation';

const Stack= createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Patient" component={PatientHome} options={{headerShown:false}} />
        <Stack.Screen name="PatientNavigation" component={PatientNavigation} />
    </Stack.Navigator>
)
export default AuthNavigator;