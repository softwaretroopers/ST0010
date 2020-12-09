import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import PatientCategoryDetails from '../../../screens/Patient/PatientCategoryDetails';
import PatientCategoryModal from '../../../screens/Patient/PatientCategoryModal';
import PatientDateTimePicker from '../../../screens/Patient/PatientDateTimePicker';

const Stack= createStackNavigator();

const DocChannelingNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="PatientCategoryDetails" component={PatientCategoryDetails} options={{headerShown:false}} />
        <Stack.Screen name="PatientCategoryModal" component={PatientCategoryModal} options={{headerShown:false}} />
        <Stack.Screen name="PatientDateTimePicker" component={PatientDateTimePicker} options={{headerShown:false}} />
  </Stack.Navigator>
)
export default DocChannelingNavigator;