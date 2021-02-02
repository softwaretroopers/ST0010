import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Menu, Divider, Provider, Appbar } from "react-native-paper";

import colors from "../configs/colors";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/logo_square.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Animatable.Text
          animation="slideInUp"
          style={{ color: colors.white, fontSize: 25, fontWeight: "bold" }}
        >
          Welcome!
        </Animatable.Text>
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
              onPress={() => navigation.navigate("DrawerNavigation")}
            >
              <LinearGradient
                colors={[colors.themeLight, colors.themeMedium]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons name="navigate-next" color="white" size={20} />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("PatientAuthNavigation")}
            >
              <LinearGradient
                colors={[colors.themeLight, colors.themeMedium]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Login</Text>
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
    color: colors.themeDark,
    paddingTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.themeDark,
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
    color: colors.themeDark,
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: colors.themeLight,
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
