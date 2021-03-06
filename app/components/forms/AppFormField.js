import React from "react";
import { useFormikContext } from "formik";
import { TextInput } from "react-native-paper";

import AppErrorMessage from "./AppErrorMessage";
import colors from "../../configs/colors";

function AppFormField({ name, icon, placeholder, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        mode="outlined"
        {...otherProps}
        label={placeholder}
        placeholder={placeholder}
        left={<TextInput.Icon name={icon} color={colors.themeDark} />}
        style={{
          marginBottom: "2%",
        }}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
