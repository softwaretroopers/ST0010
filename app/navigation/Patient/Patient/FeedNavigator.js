import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import FeedNavigationNavigator from './FeedNavigationNavigator';
import PatientHome from '../../../screens/Patient/PatientHome';

const Stack= createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Patient" component={PatientHome} options={{headerShown:false}} />
        <Stack.Screen name="PatientNavigation" component={FeedNavigationNavigator} />
    </Stack.Navigator>
)
export default FeedNavigator;