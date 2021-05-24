import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-paper";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import colors from "../configs/colors";
import Icon from "./Icon";

function DateCard({
  day,
  date,
  firstTimeSlot,
  secondTimeSlot,
  thirdTimeSlot,
  fourthTimeSlot,
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginRight: 7,
            color: colors.themeDark,
          }}
        >
          {day}
        </Text>
        <Text style={{ fontSize: 14, color: colors.themeDark }}>({date})</Text>
      </View>
      <View>
        <View style={styles.timeSlotContainer}>
          <View style={styles.timeSlot}>
            <Text style={styles.timeSlotText}>{firstTimeSlot}</Text>
          </View>
          <View style={styles.timeSlot}>
            <Text style={styles.timeSlotText}>{secondTimeSlot}</Text>
          </View>
        </View>
        <View style={styles.timeSlotContainer}>
          <View style={styles.timeSlot}>
            <Text style={styles.timeSlotText}>{thirdTimeSlot}</Text>
          </View>
          <View style={styles.timeSlot}>
            <Text style={styles.timeSlotText}>{fourthTimeSlot}</Text>
          </View>
        </View>
        <View style={styles.viewAllContainer}>
          <Button
            color={colors.white}
            style={{
              alignSelf: "center",
              padding: "2%",
              backgroundColor: colors.themeDark,
            }}
            icon="eye"
            onPress={() => navigation.navigate("DoctorTimePicker")}
          >
            View All
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    width: "80%",
    marginBottom: "5%",
    paddingVertical: "5%",
    elevation: 5,
    alignSelf: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
  },
  timeSlot: {
    backgroundColor: colors.themeDark,
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
