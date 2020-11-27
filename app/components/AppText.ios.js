import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from '../configs/colors';

function AppText({ children , style }) {
  return <Text style={[styles.text,style]}>{children}</Text>;
} 
const styles = StyleSheet.create({
  text: {
    color:"#0c0c0c",
    fontSize:20,
    fontFamily:"Avenir"
  },
});

export default AppText;
