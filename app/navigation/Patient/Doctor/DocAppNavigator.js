import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

import DocTopNavigator from "./DocTopNavigator";
import DoctorAppointment from "../../../screens/Doctor/DoctorAppointment";
import DoctorCompleted from "../../../screens/Doctor/DoctorCompleted";
import DoctorAccInfo from "../../../screens/Doctor/DoctorAccInfo";
import colors from "../../../configs/colors";

const Tab = createBottomTabNavigator();

const DocAppNavigator = () => (
    <Tab.Navigator>

        <Tab.Screen
        name="Home"
        component={DocTopNavigator}
        options={{
            tabBarIcon: ({ color,size }) =>
            <MaterialCommunityIcons name="home" color={"#009687"} size={size}/>
        }}
        />

         <Tab.Screen
        name="Appointment"
        component={DoctorAppointment}
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
        component={DoctorCompleted}
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

