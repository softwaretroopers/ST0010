import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from "../screens/WelcomeScreen";
import PatientLogin from '../screens/PatientLogin';
import DoctorLogin from '../screens/DoctorLogin';
import CooperationLogin from '../screens/CooperationLogin';

const Stack= createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Patient" component={PatientLogin} />
        <Stack.Screen name="Doctor" component={DoctorLogin} />
        <Stack.Screen name="Co-Operation" component={CooperationLogin} />
    </Stack.Navigator>
)
export default AuthNavigator;