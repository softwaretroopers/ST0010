import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../configs/colors";

const DatePickerModal = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log(date);
    hideDatePicker();
  };
  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <View style={styles.dateContainer}>
          <MaterialCommunityIcons
            name="calendar"
            size={30}
            color={colors.black}
            style={{ marginRight: "2%" }}
          />
          <AppText style={{ color: colors.black }}>Select the Date</AppText>
          <MaterialCommunityIcons
            name="chevron-down-circle"
            size={30}
            color={colors.black}
            style={{ marginLeft: "2%" }}
          />
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    paddingVertical: "6%",
    paddingHorizontal: "5%",
    marginTop: "5%",
  },
});

export default DatePickerModal;
