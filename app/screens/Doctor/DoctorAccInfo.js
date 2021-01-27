import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

import AppText from "../../components/AppText";
import ScreenVarient from "../../components/ScreenVarient";
import ListItem from "../../components/ListItem";
import colors from "../../configs/colors";

function DoctorAccInfo(props) {
  return (
    <ScreenVarient style={styles.screen}>
      <View style={styles.containerHeading}>
        <AppText style={styles.HeadingFont}>Edit Information</AppText>
      </View>
      <View style={styles.containerTop}>
        <ListItem image={require("../../assets/logo.png")} />
      </View>
      <TouchableOpacity style={styles.ContainerButton}>
        <AppText style={{ fontSize: 14, fontWeight: "bold" }}>
          Change Profile Picture
        </AppText>
      </TouchableOpacity>
      <View style={styles.containers}></View>

      <View style={styles.fixToText}>
        <Button
          color={colors.doctorPrimary}
          icon="content-save"
          mode="contained"
        >
          Update
        </Button>
      </View>
    </ScreenVarient>
  );
}

const styles = StyleSheet.create({
  containers: {
    padding: 10,
  },
  ContainerButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerHeading: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: colors.white,
    padding: "5%",
    shadowColor: colors.patientPrimary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 15,
  },
  containerTop: {
    alignItems: "center",
    marginTop: 5,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
  },
  HeadingFont: {
    fontWeight: "bold",
  },
});

export default DoctorAccInfo;
