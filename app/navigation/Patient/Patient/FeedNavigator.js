import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import PatientHome from '../../screens/PatientHome';
import PatientNavigation from '../../screens/PatientNavigation';
import FeedNavigationNavigator from './FeedNavigationNavigator';

const Stack= createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Patient" component={PatientHome} options={{headerShown:false}} />
        <Stack.Screen name="PatientNavigation" component={FeedNavigationNavigator} />
    </Stack.Navigator>
)
export default FeedNavigator;