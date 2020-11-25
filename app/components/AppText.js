import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children }) {
  return <Text>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    ...Platform.select({
      ios: {
        fontsize: 18,
        fontFamily: "Avenir",
      },
      android: {
        fontsize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
