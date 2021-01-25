import React from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";
import AppText from "../AppText";
import colors from "../../configs/colors";

function AppFormPickerVariant({
  PickerItemComponent,
  items,
  name,
  placeholder,
  placeholderIcon,
  desc,
  icon,
  numberOfColumns,
  IconFamily,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <View style={styles.container}>
        {placeholderIcon && (
          <MaterialCommunityIcons
            name={placeholderIcon}
            size={20}
            color={colors.black}
            style={styles.icon}
          />
        )}
        <AppText style={styles.text}>{desc}</AppText>
        <AppPicker
          items={items}
          onSelectItem={(item) => setFieldValue(name, item)}
          placeholder={placeholder}
          selectedItem={values[name]}
          icon={icon}
          numberOfColumns={numberOfColumns}
          IconFamily={IconFamily}
          PickerItemComponent={PickerItemComponent}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: colors.medium,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGrey,
    marginBottom: "2%",
  },
  text: {
    marginLeft: "5%",

    color: colors.medium,
  },
  icon: {
    marginLeft: 12,
  },
});

export default AppFormPickerVariant;
