import React from "react";
import { useFormikContext } from "formik";

import AppTextInputVariant from "../AppTextInputVariant";
import AppErrorMessage from "./AppErrorMessage";

function AppFormFieldVariant({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInputVariant
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormFieldVariant;
