import React from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";
import AppText from "../AppText";
import colors from "../../configs/colors";

function AppFormPickerVariant({ items, name, placeholder, icon, desc }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <View style={styles.container}>
        <AppText icon={icon} style={styles.text}>
          {desc}
        </AppText>
        <AppPicker
          items={items}
          onSelectItem={(item) => setFieldValue(name, item)}
          placeholder={placeholder}
          selectedItem={values[name]}
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
});

export default AppFormPickerVariant;
