import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import AppText from "../../components/AppText";
import AppTextVariant from "../../components/AppTextVariant";
import DatePicker from "../../components/DatePicker";
import Screen from "../../components/Screen";
import TimeSlot from "../../components/TimeSlot";

function PatientDateTimePicker(props) {
  return (
    <Screen>
      <View>
        <DatePicker></DatePicker>
        <ScrollView>
          <TimeSlot
            primaryTimeSlot="08:00 AM - 09:00 AM"
            color="medium"
            secondaryTimeSlotFirst="08:00 AM - 08:15 AM"
            secondaryTimeSlotSecond="08:15 AM - 08:30 AM"
            secondaryTimeSlotThird="08:30 AM - 08:45 AM"
            secondaryTimeSlotFourth="08:45 AM - 09:00 AM"
            colorFirst="medium"
            colorSecond="medium"
            colorThird="medium"
            colorFourth="medium"
          />
          <TimeSlot
            primaryTimeSlot="09:00 AM - 10:00 AM"
            color="no"
            secondaryTimeSlotFirst="09:00 AM - 09:15 AM"
            secondaryTimeSlotSecond="09:15 AM - 09:30 AM"
            secondaryTimeSlotThird="09:30 AM - 09:45 AM"
            secondaryTimeSlotFourth="09:00 AM - 10:00 AM"
            colorFirst="no"
            colorSecond="no"
            colorThird="no"
            colorFourth="no"
          />
          <TimeSlot
            primaryTimeSlot="10:00 AM - 11:00 AM"
            color="yes"
            secondaryTimeSlotFirst="10:00 AM - 10:15 AM"
            secondaryTimeSlotSecond="10:15 AM - 10:30 AM"
            secondaryTimeSlotThird="10:30 AM - 10:45 AM"
            secondaryTimeSlotFourth="10:45 AM - 11:00 AM"
            colorFirst="no"
            colorSecond="no"
            colorThird="yes"
            colorFourth="yes"
          />
          <TimeSlot
            primaryTimeSlot="11:00 AM - 12:00 AM"
            color="yes"
            secondaryTimeSlotFirst="11:00 AM - 11:15 AM"
            secondaryTimeSlotSecond="11:15 AM - 11:30 AM"
            secondaryTimeSlotThird="11:30 AM - 11:45 AM"
            secondaryTimeSlotFourth="11:45 AM - 12:00 AM"
            colorFirst="yes"
            colorSecond="no"
            colorThird="yes"
            colorFourth="yes"
          />
        </ScrollView>
        <View style={{ alignItems: "center",flexDirection:"row"}}>
          <AppTextVariant
            style={{ fontWeight: "bold" }}
            color="yes"
            name="square"
          >
            Available
          </AppTextVariant>
          <AppTextVariant
            style={{ fontWeight: "bold" }}
            color="medium"
            name="square"
          >
            Unavailable
          </AppTextVariant>
          <AppTextVariant
            style={{ fontWeight: "bold" }}
            color="no"
            name="square"
          >
            Booked
          </AppTextVariant>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default PatientDateTimePicker;
