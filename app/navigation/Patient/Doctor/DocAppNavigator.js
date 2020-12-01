import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

import DoctorAccInfo from "../../../screens/DoctorAccInfo";
import FeedNavigator from "../FeedNavigator";
import PatientNewsFeed from "../../../screens/PatientNewsFeed";
import PatientAppointment from "../../../screens/PatientAppointment";

const Tab = createBottomTabNavigator();

const DocAppNavigator = () => (
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
        name="Appointment"
        component={PatientNewsFeed}
        options={{
            tabBarIcon: ({ color,size }) =>
            <MaterialCommunityIcons name="calendar" color={color} size={size}/>
        }}
        />

         <Tab.Screen
        name=" "
        component={PatientAppointment}
        options={{
            tabBarIcon: ({ color,size }) =>
            <AntDesign name="pluscircleo" color={color} size={size}/>
        }}
        />

         <Tab.Screen
        name="Completed"
        component={DoctorAccInfo}
        options={{
            tabBarIcon: ({ color,size }) =>
            <MaterialCommunityIcons name="view-grid-plus" color={color} size={size}/>
        }}
        />

         <Tab.Screen
        name="Acount"
        component={DoctorAccInfo}
        options={{
            tabBarIcon: ({ color,size }) =>
            <MaterialCommunityIcons name="account-box" color={color} size={size}/>
        }}
        />
        
    </Tab.Navigator>
);

export default DocAppNavigator;