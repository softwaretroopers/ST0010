import React from "react";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../configs/colors";

function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.logoText}>Ayushaadi Medical App</Text>
        <Text>by Software Troopers</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Patient" color="patientPrimary" />
        <AppButton title="Doctor" color="doctorPrimary" />
        <AppButton title="Cooperation" color="cooperationPrimary" />
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
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
    position: "absolute",
    top: "10%",
    alignItems: "center",
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});

export default WelcomeScreen;
