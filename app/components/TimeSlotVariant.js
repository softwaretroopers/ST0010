import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import colors from "../configs/colors";

function TimeSlotVariant({ primaryTimeSlot }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.centeredView}>
      <TouchableOpacity
        style={{
          backgroundColor: colors.doctorPrimary,
          borderRadius: 15,
          padding: 10,
          margin: 5,
          elevation: 2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.textStyle}>{primaryTimeSlot}</Text>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          tintColors={{ true: colors.white, false: colors.black }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    padding: 5,
  },
});

export default TimeSlotVariant;
