import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: colors.darkGrey,
        }}
      >
        {item.label}
      </Text>
      <MaterialCommunityIcons
        name={item.name}
        size={20}
        color={colors.darkGrey}
        style={{ marginLeft: 5 }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "10%",
    borderColor: "#d2d2d2",
    flexDirection: "row",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderTopWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PickerItem;
