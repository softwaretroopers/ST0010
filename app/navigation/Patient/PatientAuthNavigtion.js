import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import PatientRegister from '../../screens/PatientRegister';
import PatientLogin from '../../screens/PatientLogin';

const Stack= createStackNavigator();

const PatientAuthNavigtion = () => (
    <Stack.Navigator>
         <Stack.Screen name="PatientLoginScreen" component={PatientLogin} />
         <Stack.Screen name="PatientRegister" component={PatientRegister} />
    </Stack.Navigator>
)
export default PatientAuthNavigtion;