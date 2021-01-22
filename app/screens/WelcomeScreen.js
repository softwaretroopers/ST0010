import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import colors from "../configs/colors";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#032940" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/logo_square.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: "white",
          },
        ]}
        animation="fadeInUpBig"
      >
        <View style={styles.background}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("PatientAuthNavigation")}
            >
              <LinearGradient
                colors={["#e02b97", "#7d2d81"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Patient</Text>
                <MaterialIcons name="navigate-next" color="white" size={20} />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("DocAuthNavigation")}
            >
              <LinearGradient
                colors={["#e02b97", "#7d2d81"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Doctor</Text>
                <MaterialIcons name="navigate-next" color="white" size={20} />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("CooperationLogin")}
            >
              <LinearGradient
                colors={["#e02b97", "#7d2d81"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Cooperation</Text>
                <MaterialIcons name="navigate-next" color="white" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
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
  container: {
    flex: 1,
    backgroundColor: "#032940",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "#e02b97",
    marginTop: 5,
  },
  button: {
    marginTop: 30,
  },
  signIn: {
    width: "100%",
    padding: "7%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default WelcomeScreen;
