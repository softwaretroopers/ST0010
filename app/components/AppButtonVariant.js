import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../configs/colors";

function AppButtonVariant({ title, style, onPress, color, textStyle }) {
  return (
    <TouchableOpacity
      style={[styles.button, style, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.patientPrimary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "50%",
    marginVertical: 10,
    elevation: 10,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginVertical: 8,
  },
});

export default AppButtonVariant;
