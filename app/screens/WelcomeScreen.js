import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text>Ayushaadi Medical App</Text>
      </View>
      <View style={styles.patientButton}></View>
      <View style={styles.doctorButton}></View>
      <View style={styles.cooperationButton}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  patientButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#3d4db7",
  },
  doctorButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#009687",
  },
  cooperationButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#eb1460",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
