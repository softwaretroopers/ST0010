import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PatientHome from "../screens/PatientHome";
import PatientAccInfo from "../screens/PatientAccInfo";
import PatientAppointment from "../screens/PatientAppointment";
import PatientNewsFeed from "../screens/PatientNewsFeed";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>

        <Tab.Screen
        name="Home"
        component={PatientHome}
        options={{
            tabBarIcon: ({ color,size }) =>
            <MaterialCommunityIcons name="home" color={color} size={size}/>
        }}
        />

         <Tab.Screen
        name="NewsFeed"
        component={PatientNewsFeed}
        options={{
            tabBarIcon: ({ color,size }) =>
            <MaterialCommunityIcons name="newspaper" color={color} size={size}/>
        }}
        />

         <Tab.Screen
        name="Appointment"
        component={PatientAppointment}
        options={{
            tabBarIcon: ({ color,size }) =>
            <MaterialCommunityIcons name="book" color={color} size={size}/>
        }}
        />

         <Tab.Screen
        name="Account"
        component={PatientAccInfo}
        options={{
            tabBarIcon: ({ color,size }) =>
            <MaterialCommunityIcons name="account-box" color={color} size={size}/>
        }}
        />
        
    </Tab.Navigator>
);

export default AppNavigator;