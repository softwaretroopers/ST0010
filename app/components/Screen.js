import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "../configs/colors";
function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
  },
});
export default Screen;
