import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-paper";
import colors from "../configs/colors";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.themeDark} barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="zoomInDown"
          source={require("../assets/logo_square.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.white,
          },
        ]}
        animation="fadeInUpBig"
      >
        <Text
          style={[
            styles.title,
            {
              color: colors.themeDark,
            },
          ]}
        >
          Stay connected with everyone!
        </Text>

        <Animatable.View animation="pulse" style={styles.button}>
          <Button
            style={{
              width: "90%",
              alignSelf: "center",
              padding: "3%",
              backgroundColor: colors.themeDark,
            }}
            icon="arrow-right-drop-circle"
            mode="contained"
            onPress={() => navigation.navigate("DrawerNavigation")}
          >
            Get Started
          </Button>

          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: "3%" }}
            onPress={() => navigation.navigate("PatientAuthNavigation")}
          >
            <Text style={styles.text}>Sign in with account</Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default WelcomeScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
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
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: colors.themeDark,
    marginTop: 5,
  },
  button: {
    marginTop: "13%",
  },
  signIn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    padding: "5%",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
