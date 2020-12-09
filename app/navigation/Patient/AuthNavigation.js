import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../../screens/WelcomeScreen';
import DoctorLogin from '../../screens/Doctor/DoctorLogin';
import CooperationLogin from '../../screens/Cooperation/CooperationLogin';
import PatientAuthNavigtion from './Patient/PatientAuthNavigtion';

const Stack= createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="PatientAuthNavigtion" component={PatientAuthNavigtion} options={{headerShown:false}}/>
        <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
        <Stack.Screen name="CooperationLogin" component={CooperationLogin} />
    </Stack.Navigator>
)
export default AuthNavigator;