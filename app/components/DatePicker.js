import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import { Formik } from "formik";
import { Chip } from "react-native-paper";

import AppText from "./AppText";
import colors from "../configs/colors";

export default function DatePicker() {
  return (
    <Formik
      initialValues={{ myDate: moment().format("YYYY-MM-DD") }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <MyForm
          values={values}
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
        />
      )}
    </Formik>
  );
}

export const MyForm = (props) => {
  const { handleSubmit, values, setFieldValue } = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setFieldValue("myDate", moment(date).format("YYYY-MM-DD"));
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
        date={moment(values.myDate).toDate()}
      />
      <Chip
        style={{ alignSelf: "center", marginTop: "2%", padding: "1%" }}
        icon="calendar-check"
        onPress={handleSubmit}
      >
        {moment(values.myDate).format("YYYY-MM-DD")}
      </Chip>
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
