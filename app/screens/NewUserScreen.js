import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const SplashScreen = () => {
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
        <Text style={styles.title}>Ayushaadhi</Text>

        <View style={styles.button}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#e02b97", "#7d2d81"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="white" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.text}>Already have an account?</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
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
    paddingVertical: 50,
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
