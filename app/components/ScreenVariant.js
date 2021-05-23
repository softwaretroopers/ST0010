import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";
import colors from "../configs/colors";

function ScreenVariant({ children, style }) {
  return <SafeAreaView style={(style, styles.screen)}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default ScreenVariant;
