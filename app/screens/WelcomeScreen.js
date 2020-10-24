import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import colors from "../configs/colors";

function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.logoText}>Ayushaadi Medical App</Text>
        <Text>by Software Troopers</Text>
      </View>
      <View style={styles.patientButton}>
        <Text style={styles.buttonText}>Patient</Text>
      </View>
      <View style={styles.doctorButton}>
        <Text style={styles.buttonText}>Doctor</Text>
      </View>
      <View style={styles.cooperationButton}>
        <Text style={styles.buttonText}>Cooperation</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  patientButton: {
    width: "90%",
    height: 70,
    backgroundColor: colors.patientPrimary,
    borderRadius: 100,
    margin: 10,
    elevation: 10,
  },
  doctorButton: {
    width: "90%",
    height: 70,
    backgroundColor: colors.doctorPrimary,
    borderRadius: 100,
    margin: 10,
    elevation: 10,
  },
  cooperationButton: {
    width: "90%",
    height: 70,
    backgroundColor: colors.cooperationPrimary,
    borderRadius: 100,
    margin: 10,
    marginBottom: 20,
    elevation: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default WelcomeScreen;
