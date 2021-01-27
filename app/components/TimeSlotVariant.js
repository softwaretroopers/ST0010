import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Checkbox } from "react-native-paper";

import colors from "../configs/colors";

function TimeSlotVariant({ slot }) {
  const [checked, setChecked] = useState(false);
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
        <Text style={styles.textStyle}>{slot}</Text>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
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
