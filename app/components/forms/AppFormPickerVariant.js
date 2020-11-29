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
        <AppErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
  },
  text: {
    marginLeft: "15%",
    marginTop: "7%",
    color: colors.medium,
  },
  icon: {
    position: "absolute",
    marginLeft: "5%",
    marginTop: "8%",
  },
});

export default AppFormPickerVariant;
