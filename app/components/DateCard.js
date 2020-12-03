import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../configs/colors";
import AppText from "./AppText";
import Icon from "./Icon";

function DateCard({ day, date }) {
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <AppText style={{ fontSize: 18, fontWeight: "bold", marginRight: 7 }}>
          {day}
        </AppText>
        <AppText style={{ fontSize: 14 }}>({date})</AppText>
      </View>
      <View>                        
        <View style={styles.timeSlotContainer}>
          <TouchableWithoutFeedback style={styles.timeSlot}>
            <AppText style={styles.timeSlotText}>01:00 PM - 02:00 PM</AppText>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.timeSlot}>
            <AppText style={styles.timeSlotText}>01:00 PM - 02:00 PM</AppText>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.timeSlotContainer}>
          <TouchableWithoutFeedback style={styles.timeSlot}>
            <AppText style={styles.timeSlotText}>01:00 PM - 02:00 PM</AppText>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.timeSlot}>
            <AppText style={styles.timeSlotText}>01:00 PM - 02:00 PM</AppText>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.viewAllContainer}>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              backgroundColor={colors.doctorPrimary}
            ></Icon>
            <AppText style={{ fontSize: 12, fontWeight: "bold" }}>
              View All
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    width: "100%",
    marginBottom: "5%",
    padding: "5%",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  container: {
    flexDirection: "row",
  },
  timeSlot: {
    backgroundColor: colors.yes,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  timeSlotText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "bold",
  },
  timeSlotContainer: {
    flexDirection: "row",
  },
  viewAllContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 0,
  },
});
export default DateCard;
