import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Chip, Divider } from "react-native-paper";

import DatePicker from "../../components/DatePicker";
import Screen from "../../components/Screen";
import TimeSlot from "../../components/TimeSlot";
import colors from "../../configs/colors";

const timeSlots = [
  {
    id: 1,
    primaryTimeSlot: "08:00 AM - 09:00 AM",
    color: "medium",
    secondaryTimeSlotFirst: "08:00 AM - 08:15 AM",
    secondaryTimeSlotSecond: "08:15 AM - 08:30 AM",
    secondaryTimeSlotThird: "08:30 AM - 08:45 AM",
    secondaryTimeSlotFourth: "08:45 AM - 09:00 AM",
    colorFirst: "medium",
    colorSecond: "medium",
    colorThird: "medium",
    colorFourth: "medium",
  },
  {
    id: 2,
    primaryTimeSlot: "09:00 AM - 10:00 AM",
    color: "no",
    secondaryTimeSlotFirst: "09:00 AM - 09:15 AM",
    secondaryTimeSlotSecond: "09:15 AM - 09:30 AM",
    secondaryTimeSlotThird: "09:30 AM - 09:45 AM",
    secondaryTimeSlotFourth: "09:00 AM - 10:00 AM",
    colorFirst: "no",
    colorSecond: "no",
    colorThird: "no",
    colorFourth: "no",
  },
  {
    id: 3,
    primaryTimeSlot: "10:00 AM - 11:00 AM",
    color: "yes",
    secondaryTimeSlotFirst: "10:00 AM - 10:15 AM",
    secondaryTimeSlotSecond: "10:15 AM - 10:30 AM",
    secondaryTimeSlotThird: "10:30 AM - 10:45 AM",
    secondaryTimeSlotFourth: "10:45 AM - 11:00 AM",
    colorFirst: "no",
    colorSecond: "no",
    colorThird: "yes",
    colorFourth: "yes",
  },
  {
    id: 4,
    primaryTimeSlot: "11:00 AM - 12:00 AM",
    color: "yes",
    secondaryTimeSlotFirst: "11:00 AM - 11:15 AM",
    secondaryTimeSlotSecond: "11:15 AM - 11:30 AM",
    secondaryTimeSlotThird: "11:30 AM - 11:45 AM",
    secondaryTimeSlotFourth: "11:45 AM - 12:00 AM",
    colorFirst: "yes",
    colorSecond: "no",
    colorThird: "yes",
    colorFourth: "yes",
  },
];

function PatientDateTimePicker(props) {
  return (
    <Screen>
      <View>
        <DatePicker></DatePicker>
        <Divider />
        <View
          style={{ margin: 10, alignItems: "center", flexDirection: "row" }}
        >
          <Chip selectedColor={colors.yes} style={{ margin: 10 }} icon="circle">
            Available
          </Chip>
          <Chip selectedColor={colors.no} style={{ margin: 10 }} icon="circle">
            Unavailable
          </Chip>
          <Chip
            selectedColor={colors.medium}
            style={{ margin: 10 }}
            icon="circle"
          >
            Booked
          </Chip>
        </View>
        <View>
          <FlatList
            data={timeSlots}
            keyExtractor={(timeSlot) => timeSlot.id.toString()}
            renderItem={({ item }) => (
              <TimeSlot
                primaryTimeSlot={item.primaryTimeSlot}
                color={item.color}
                secondaryTimeSlotFirst={item.secondaryTimeSlotFirst}
                secondaryTimeSlotSecond={item.secondaryTimeSlotSecond}
                secondaryTimeSlotThird={item.secondaryTimeSlotThird}
                secondaryTimeSlotFourth={item.secondaryTimeSlotFourth}
                colorFirst={item.colorFirst}
                colorSecond={item.colorSecond}
                colorThird={item.colorThird}
                colorFourth={item.colorFourth}
              />
            )}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default PatientDateTimePicker;
