import React from "react";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../configs/colors";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.logoText}>Ayushaadhi Medical App</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Patient"
          color="patientPrimary"
          onPress={() => navigation.navigate("PatientAuthNavigation")}
        />
        <AppButton
          title="Doctor"
          color="doctorPrimary"
          onPress={() => navigation.navigate("DocAuthNavigation")}
        />
        <AppButton
          title="Cooperate"
          color="cooperationPrimary"
          onPress={() => navigation.navigate("CooperationLogin")}
        />
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
    color: "#032940",
    paddingTop: 10,
  },
});

export default WelcomeScreen;
