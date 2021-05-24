import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, color, icon }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton title={title} color={color} onPress={handleSubmit} icon={icon} />
  );
}

export default SubmitButton;
