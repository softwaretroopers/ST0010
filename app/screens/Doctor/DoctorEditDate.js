import React from 'react';
import { ScrollView } from 'react-native';
import DateCard from '../../components/DateCard';
import Screen from '../../components/Screen';
import DatePicker from '../../components/DatePicker';

function DoctorEditDate(props) {
    return (
        <Screen>
             <DatePicker></DatePicker>
            <ScrollView contentContainerStyle={{justifyContent: "center", alignItems: "center"
        }}>
           
            <DateCard
            date="10/12/2020"
            day="Today"
            />
            <DateCard date="10/13/2020"
            day="Tommorrow"/>
            <DateCard date="10/14/2020"
            day="Day after Tommorrow"/>
            </ScrollView>
        </Screen>
    );
}

export default DoctorEditDate;