import React from "react";
import { ScrollView } from "react-native";

import AppButtonVariant from "../../components/AppButtonVariant";
import Screen from "../../components/Screen";
import TimeSlotVariant from "../../components/TimeSlotVariant";

function DoctorDatePicker(props) {
  return (
    <Screen>
      <ScrollView>
        <TimeSlotVariant primaryTimeSlot="01:00PM - 02:00PM"></TimeSlotVariant>
        <TimeSlotVariant primaryTimeSlot="02:00PM - 03:00PM"></TimeSlotVariant>
        <TimeSlotVariant primaryTimeSlot="03:00PM - 04:00PM"></TimeSlotVariant>
        <TimeSlotVariant primaryTimeSlot="04:00PM - 05:00PM"></TimeSlotVariant>
      </ScrollView>
      <AppButtonVariant color="yes" title="Submit"></AppButtonVariant>
    </Screen>
  );
}

export default DoctorDatePicker;
