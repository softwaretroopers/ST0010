import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";

function AppText({ children, style, icon }) {
  return (
    <>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.black}
          style={styles.icon}
        />
      )}
      <Text style={[styles.text, style]}>{children}</Text>
    </>
  );
}
const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
  icon: {
    position: "absolute",
    marginLeft: "5%",
    marginTop: "8%",
  },
});

export default AppText;
