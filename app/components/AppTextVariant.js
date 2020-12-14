import React from "react";
import { Text, StyleSheet, Platform, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../configs/colors";

function AppTextVariant({ children, style, color, name }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={[styles.text, style]}>{children}</Text>
      <FontAwesome
        style={{ marginLeft: 10 }}
        name={name}
        size={24}
        color={colors[color]}
      />
    </View>
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
});

export default AppTextVariant;
