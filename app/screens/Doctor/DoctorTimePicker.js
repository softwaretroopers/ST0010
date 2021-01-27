import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { FAB } from "react-native-paper";

import Screen from "../../components/Screen";
import TimeSlotVariant from "../../components/TimeSlotVariant";

const timeSlots = [
  {
    slot: "01:00PM - 02:00PM",
  },
  {
    slot: "02:00PM - 03:00PM",
  },
  {
    slot: "03:00PM - 04:00PM",
  },
  {
    slot: "04:00PM - 05:00PM",
  },
];

function DoctorTimePicker({ navigation }) {
  return (
    <Screen>
      <View>
        <FlatList
          data={timeSlots}
          keyExtractor={(timeSlot) => timeSlot.slot.toString()}
          renderItem={({ item }) => <TimeSlotVariant slot={item.slot} />}
        />
      </View>
      <FAB
        style={styles.fab}
        icon="alarm-plus"
        onPress={() => navigation.navigate("DoctorAppointment")}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default DoctorTimePicker;
