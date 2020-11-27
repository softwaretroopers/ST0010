import React from 'react'
import { createStackNavigator } from '@react-native/stack';

import WelcomeScreen from "../screens/WelcomeScreen";

const Stack= createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)