import React from "react";
import { View, StyleSheet, Button } from "react-native";

import Icon from "../components/Icon";
import ScreenVarient from "../components/ScreenVarient";
import ListItem from "../components/ListItem";
import colors from "../configs/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function PatientAccInfo(props) {
  return (
    <ScreenVarient>
      <View style={styles.accounttop}>
        <ListItem
          title="Mr.Anonymous"
          IconComponent={<Icon name="user" size={75} />}
        />
        <View style={styles.title}>
          <ListItem
            title="+94 77 252 5258"
            IconComponent={<Icon name="mobile" size={25} />}
          />
          <ListItem
            title="softwaretroopers.com"
            IconComponent={<Icon name="email" size={25} />}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Edit" color="black" />
      </View>

      <View style={styles.accountMiddle}>
        <AppText style={styles.accountMiddleDetail}>Age</AppText>
        <AppText style={styles.accountMiddleDetail}>Gender</AppText>
        <AppText style={styles.accountMiddleDetail}>Address</AppText>
      </View>
      <View>
        <AppText style={styles.accountBottom}>Reports</AppText>
      </View>
    </ScreenVarient>
  );
}

const styles = StyleSheet.create({
  accounttop: {
    backgroundColor: colors.patientPrimary,
    height: "42%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  accountMiddle: {
    padding: 20,
  },
  accountMiddleDetail: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    borderBottomWidth: 1,
    fontWeight: "bold",
  },
  accountBottom: {
    marginTop: 30,
    marginLeft: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "18%",
    height: 30,
    marginLeft: "40%",
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
  },
});

export default PatientAccInfo;
