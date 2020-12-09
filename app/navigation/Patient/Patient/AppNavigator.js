import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PatientAccInfo from "../../../screens/Patient/PatientAccInfo";
import FeedNavigator from "./FeedNavigator";
import PatientNewsFeed from "../../../screens/Patient/PatientNewsFeed";
import PatientTopNavigator from "./PatientTopNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
        name="Home"
        component={FeedNavigator}
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
        name="Appointments"
        component={PatientTopNavigator}
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