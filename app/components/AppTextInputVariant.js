import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";
import defaultStyles from "../configs/styles";

function AppTextInputVariant({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.black}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderStyle: "solid",
    borderColor: colors.darkGrey,
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
    padding: 5,
  },
});

export default AppTextInputVariant;
