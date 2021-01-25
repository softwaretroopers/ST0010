import React from "react";
import { View, StyleSheet } from "react-native";
import {
  FAB,
  Text,
  Avatar,
  Title,
  Subheading,
  Caption,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import ReportCard from "../../components/ReportCard";
import ScreenVarient from "../../components/ScreenVarient";
import colors from "../../configs/colors";

function PatientAccInfo(props) {
  return (
    <ScreenVarient>
      <Animatable.View
        animation="bounceInDown"
        duration={1500}
        style={styles.accounttop}
      >
        <FAB style={styles.fab} small icon="pen" />
        <Avatar.Image size={100} source={require("../../assets/logo.png")} />
        <Title style={{ color: colors.white }}>Software Troopers</Title>
        <Subheading style={{ color: colors.white }}>071 400 9020</Subheading>
        <Caption style={{ color: colors.white }}>
          support@softwaretroopers.com
        </Caption>
        <View flexDirection="row" style={{ margin: "2%" }}>
          <View
            flexDirection="row"
            style={{
              width: "20%",
              backgroundColor: colors.white,
              padding: "1%",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: "2%",
            }}
          >
            <MaterialCommunityIcons name="calendar" size={16} color="black" />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>18</Text>
          </View>
          <View
            flexDirection="row"
            style={{
              width: "20%",
              backgroundColor: colors.white,
              padding: "1%",
              borderRadius: 10,
              justifyContent: "center",
              marginHorizontal: "2%",
            }}
          >
            <MaterialCommunityIcons
              name="gender-male-female"
              size={16}
              color="black"
            />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Male</Text>
          </View>
        </View>
      </Animatable.View>
      <View style={styles.ReportCards}>
        <Title style={{ marginBottom: "2%" }}>Reports</Title>
        <ReportCard
          title="Blood Report"
          subtitle="Dr.Anonymous 1"
          image={require("../../assets/report.png")}
        />
        <ReportCard
          title="Laboratory Report"
          subtitle="Dr.Anonymous 2"
          image={require("../../assets/report.png")}
        />
        <ReportCard
          title="Consultation"
          subtitle="Dr.Anonymous 3"
          image={require("../../assets/report.png")}
        />
      </View>
    </ScreenVarient>
  );
}

const styles = StyleSheet.create({
  accounttop: {
    backgroundColor: colors.patientPrimary,
    borderRadius: 20,
    margin: "2%",
    padding: "2%",
    alignItems: "center",
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
  fab: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "white",
  },
  ReportCards: {
    flex: 1,
    display: "flex",
    marginTop: 10,
    marginHorizontal: 30,
  },
});

export default PatientAccInfo;
