import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import colors from "../configs/colors";

function DoctorListItem({ title, date, time, calltype, iconType }) {
  return (
    <View style={styles.DoctorListItem}>
      <View style={styles.containerRight}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.calltype}>
          {iconType}
          <Text style={styles.icontext}>{calltype}</Text>
        </View>
      </View>
      <View style={styles.containerRight}>
        <Text style={styles.text}>{date}</Text>
        <Text style={styles.text}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btntext: {
    fontWeight: "bold",
    color: colors.white,
    marginLeft: 5,
  },
  chatbtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.black,
    borderRadius: 15,
    marginTop: "-25%",
  },
  DoctorListItem: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 25,
    marginBottom: 2,

    shadowColor: colors.themeDark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  text: {
    fontSize: 15,
    color: colors.themeDark,
    fontWeight: "bold",
  },
  icontext: {
    fontSize: 15,
    color: colors.themeDark,
    marginLeft: 5,
    fontWeight: "bold",
  },
  calltype: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DoctorListItem;
