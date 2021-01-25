import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import AppText from "../AppText";
import colors from "../../configs/colors";

function AppErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: { color: colors.warn, alignSelf: "center", marginBottom: "2%" },
});

export default AppErrorMessage;
