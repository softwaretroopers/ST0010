import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../../screens/WelcomeScreen';
import DoctorLogin from '../../screens/DoctorLogin';
import CooperationLogin from '../../screens/CooperationLogin';
import PatientAuthNavigtion from './PatientAuthNavigtion';



const Stack= createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="PatientLoginScreen" component={PatientAuthNavigtion} options={{headerShown:false}}/>
        <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
        <Stack.Screen name="CooperationLogin" component={CooperationLogin} />
    </Stack.Navigator>
)
export default AuthNavigator;