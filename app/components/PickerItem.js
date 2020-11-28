import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../configs/colors";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    borderColor: "#d2d2d2",
    textAlign: "center",
    backgroundColor: colors.lightGrey,
    color: colors.darkGrey,
    borderWidth: 1,
    borderTopWidth: 0,
    fontSize: 16,
    color: colors.darkGrey,
    fontWeight: "bold",
  },
});

export default PickerItem;
