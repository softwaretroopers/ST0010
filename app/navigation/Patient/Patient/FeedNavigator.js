import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import FeedNavigationNavigator from './FeedNavigationNavigator';
import PatientHome from '../../../screens/Patient/PatientHome';
import DocChannelingNavigator from './DocChannelingNavigator';
import PatientCategoryDetails from '../../../screens/Patient/PatientCategoryDetails';

const Stack= createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Patient" component={PatientHome} options={{headerShown:false}} />
        <Stack.Screen name="PatientCategoryDetails" component={PatientCategoryDetails} options={{headerShown:false}} />

    </Stack.Navigator>
)
export default FeedNavigator;