import React from 'react';
import { View } from 'react-native';
import CardAppointments from '../../components/CardAppointments';
import colors from '../../configs/colors';

function AppointmentsCompleted(props) {
    return (
        <View style={{
            backgroundColor:colors.lightGrey,
              flex:1,
        }}>
       
             <CardAppointments 
        name="Dr.shehan"
        date="2020/12/10"
        time="05.20"
        image={require("../../assets/doctor.png")}
        />

<CardAppointments 
        name="Dr.nehanga"
        date="2020/12/10"
        time="05.20"
        image={require("../../assets/doctor.png")}
        />

        </View>
        
    );
}

export default AppointmentsCompleted;