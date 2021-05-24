import React from "react";
import { Button } from "react-native-paper";
import colors from "../configs/colors";

function AppButton({
  title,
  onPress,
  color,
  style,
  icon,
  titleColor = colors.white,
}) {
  return (
    <Button
      color={titleColor}
      style={
        (style,
        {
          width: "90%",
          alignSelf: "center",
          padding: "3%",
          backgroundColor: colors[color],
        })
      }
      icon={icon}
      onPress={onPress}
    >
      {title}
    </Button>
  );
}

export default AppButton;
